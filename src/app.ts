import { PrismaClient } from "@prisma/client";
import { envs } from "./config/envs";
import { Server } from "./presentation/server";

(async () => {
  main();
})();

async function main() {
  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });
 const prisma = new PrismaClient();

/* const newLog = await prisma.logModel.create({
  data: {
    level: "HIGH",
    message: "hello world",
    origin: "app.ts",
  }
}); */
const log = await prisma.logModel.findMany();

console.log({log});

  //server.start();
}
