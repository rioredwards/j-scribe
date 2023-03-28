import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import path from "path";

export const serve = (port: number, filename: string, dir: string) => {
  const app = express();

  const packagePath = require.resolve("local-client/build/index.html");
  console.log("packagePath: ", packagePath);
  const packageDir = path.dirname(packagePath);
  console.log("packageDir: ", packageDir);
  app.use(express.static(packageDir));

  // app.use(
  //   createProxyMiddleware({
  //     target: "http://localhost:3000",
  //     ws: true,
  //     logLevel: "silent",
  //   })
  // );

  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on("error", reject);
  });
};
