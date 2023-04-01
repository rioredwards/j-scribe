import path from "path";
import { Command } from "commander";
import { serve } from "@jbook-notes/local-api";

interface LocalApiError {
  code: string;
}

const isProduction = process.env.NODE_ENV === "production";

export const serveCommand = new Command()
  .command("serve [filename]")
  .description("Open a file for editing")
  .option("-p, --port <number>", "port to run server on", "4005")
  .action(async (filename = "intro.js", options: { port: string }) => {
    // Type predicate
    const isLocalApiError = (err: any): err is LocalApiError => {
      return typeof err.code === "string";
    };

    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      const file = path.basename(filename);

      await serve(parseInt(options.port), file, dir, !isProduction);
      console.log(
        `🥳 SUCCESS: Opened ${filename}. Navigate to http://localhost:${options.port} to edit the file.`
      );
    } catch (err) {
      // Type guard
      if (isLocalApiError(err)) {
        if (err.code === "EADDRINUSE") {
          console.error(
            `😢 ERROR: Port ${options.port} is in use - try running on a different port using 'jbook serve -p <your-port-here>'`
          );
        }
      } else if (err instanceof Error) {
        console.log("Heres the problem", err.message);
      }
      process.exit(1);
    }
  });
