import path from "path";
import { Command } from "commander";
import { serve } from "@j-scribe/local-api";

interface LocalApiError {
  code: string;
}

const isProduction = process.env.NODE_ENV === "production";

export const serveCommand = new Command()
  .command("serve [filename]")
  .description("Open a file for editing")
  .option("-p, --port <number>", "port to run server on", "4005")
  .action(async (filename = "_intro.js", options: { port: string }) => {
    // Type predicate
    const isLocalApiError = (err: any): err is LocalApiError => {
      return typeof err.code === "string";
    };

    try {
      // If the filename is intro.js, then dir is __dirname (where script lives) and file is intro.js
      // else dir is current working directory + any directory specified in the filename
      const dir =
        filename === "_intro.js"
          ? __dirname
          : path.join(process.cwd(), path.dirname(filename));

      console.log("dir: ", dir);
      const file = path.basename(filename);

      await serve(parseInt(options.port), file, dir, !isProduction);
      console.log(
        `🥳 SUCCESS: Opened ${file}. Navigate to http://localhost:${options.port} to edit the file.`
      );
    } catch (err) {
      // Type guard
      if (isLocalApiError(err)) {
        if (err.code === "EADDRINUSE") {
          console.error(
            `😢 ERROR: Port ${options.port} is in use - try running on a different port using 'j-scribe serve -p <your-port-here>'`
          );
        }
      } else if (err instanceof Error) {
        console.log("Heres the problem", err.message);
      }
      process.exit(1);
    }
  });
