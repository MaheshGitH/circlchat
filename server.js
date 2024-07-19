import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
import { prisma } from "./prisma/prismaClient";

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
    socket.on("groupID", (groupId) => {
      previousGroupID = groupId;
      socket.join(groupId);

      socket.on("message", (data) => {
        socket.to(groupId).emit("recieve", data, groupId);
      });
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
