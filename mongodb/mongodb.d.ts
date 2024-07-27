declare module "@/mongodb/mongodb" {
  import { MongoClient } from "mongodb";
  const clientPromise: Promise<MongoClient>;
  export default clientPromise;
}
