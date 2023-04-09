#!/usr/bin/env node
import { program } from "commander";
import { serveCommand } from "./commands/serve";

console.log("Welcome to j-scribe!");

program.addCommand(serveCommand);

program.parse(process.argv);
