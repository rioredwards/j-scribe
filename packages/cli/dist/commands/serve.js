"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveCommand = void 0;
const path_1 = __importDefault(require("path"));
const commander_1 = require("commander");
const local_api_1 = require("@jbook-notes/local-api");
const isProduction = process.env.NODE_ENV === "production";
exports.serveCommand = new commander_1.Command()
    .command("serve [filename]")
    .description("Open a file for editing")
    .option("-p, --port <number>", "port to run server on", "4005")
    .action((filename = "_intro.js", options) => __awaiter(void 0, void 0, void 0, function* () {
    // Type predicate
    const isLocalApiError = (err) => {
        return typeof err.code === "string";
    };
    try {
        // If the filename is intro.js, then dir is __dirname (where script lives) and file is intro.js
        // else dir is current working directory + any directory specified in the filename
        const dir = filename === "_intro.js"
            ? __dirname
            : path_1.default.join(process.cwd(), path_1.default.dirname(filename));
        console.log("dir: ", dir);
        const file = path_1.default.basename(filename);
        yield (0, local_api_1.serve)(parseInt(options.port), file, dir, !isProduction);
        console.log(`🥳 SUCCESS: Opened ${file}. Navigate to http://localhost:${options.port} to edit the file.`);
    }
    catch (err) {
        // Type guard
        if (isLocalApiError(err)) {
            if (err.code === "EADDRINUSE") {
                console.error(`😢 ERROR: Port ${options.port} is in use - try running on a different port using 'jbook serve -p <your-port-here>'`);
            }
        }
        else if (err instanceof Error) {
            console.log("Heres the problem", err.message);
        }
        process.exit(1);
    }
}));
