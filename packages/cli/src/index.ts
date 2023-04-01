#!/usr/bin/env node
import { program } from "commander";
import { serveCommand } from "./commands/serve";

console.log("Welcome to jbook!");

program.addCommand(serveCommand);

program.parse(process.argv);
