import { MongoMemoryServer } from "mongodb-memory-server";
export default async function globalSetup() {
  const instance = await MongoMemoryServer.create({
    binary: {
      version: "8.0.10",
    },
  });
  global.__MONGOINSTANCE = instance;
  process.env.DATABASE_URL = instance.getUri();
}
