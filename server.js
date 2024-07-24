import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
import clientPromise from "./mongodb/mongodb.js";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  let previousGroupID;
  io.on("connection", (socket) => {
    socket.on("leaveGroup", (groupId) => {
      if (previousGroupID === groupId) return;
      socket.leave(previousGroupID);

      socket.removeAllListeners("message");
    });
    socket.on("groupID", async (groupId) => {
      previousGroupID = groupId;
      socket.join(groupId);

      const db = (await clientPromise).db("conversation");
      const collection = db.collection(groupId);

      socket.on("message", (data) => {
        collection.insertOne({
          userId: data.userId,
          userName: data.userName,
          content: data.content,
          createdAt: new Date(),
        });
        io.in(groupId).emit("recieve", data);
      });
    });

    socket.on("disconnect", () => {
      socket.removeAllListeners("leaveGroup");
      socket.removeAllListeners("groupID");
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
