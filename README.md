# j-scribe

Your **All-in-One** JavaScript **Sandbox** and **Notebook**.

![j-scribe screenshot](assets/j-scribe-logo-banner-blue.svg)

j-scribe provides users with a versatile platform to create, share, and modify code snippets in real-time.

With support for a variety of libraries and frameworks, j-scribe's intuitive user interface and live preview make it easy to see the results of your code as you type.

---

This project served as an educational exercise to enhance my understanding of TypeScript, React, and React-Redux. It was developed by following along with this 30-hour comprehensive Udemy tutorial: [React and Typescript: Build a Portfolio Project](https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/) created by the fantastic [Stephen Grider](https://www.udemy.com/user/sgslo/).

## Tech Stack

| [![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=black&style=for-the-badge)](https://www.typescriptlang.org/) | [![React](https://img.shields.io/badge/-React-61DAFB?logo=React&logoColor=black&style=for-the-badge)](https://reactjs.org/)               | [![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=Redux&logoColor=white&style=for-the-badge)](https://redux.js.org/) | [![Lerna](https://img.shields.io/badge/-Lerna-CF4349?logo=Lerna&logoColor=white&style=for-the-badge)](https://lerna.js.org/)            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| [![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)                      | [![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=Express&logoColor=white&style=for-the-badge)](https://expressjs.com/) |   [![Bulma](https://img.shields.io/badge/-Bulma-00D1B2?logo=Bulma&logoColor=white&style=for-the-badge)](https://bulma.io/)   | [![esbuild](https://img.shields.io/badge/-esbuild-F8A51C?logo=esbuild&logoColor=black&style=for-the-badge)](https://esbuild.github.io/) |

## Features

- **All-in-One Sandbox**: Write, edit, and preview JavaScript and React code snippets without the need for external tools.
- **Real-Time Editing**: See the results of your code immediately with j-scribe's live preview feature, making it easier to debug and visualize your work.
- **Library Support**: Utilize popular libraries and frameworks to enhance your coding experience.
- **Text-Editor**: j-scribe provides a user-friendly way to document code using the built-in Markdown text-editor.
- **Sharing and Collaboration**: j-scribe projects are automatically serialized and saved to user's machines, making it possible to store and share projects with others.
- **Command-Line Interface**: j-scribe offers a convenient CLI, available on npm, for opening and creating j-scribe files from the command line. `j-scribe serve <filename>` starts a local API and opens the front-end application on a localhost port, allowing users to easily access and interact with j-scribe in their browser.

## Usage

1. Install the [CLI](https://www.npmjs.com/package/j-scribe-notes) by running `npm i j-scribe-notes`.
2. Open the built-in tutorial with `j-scribe-notes serve _intro` and follow the instructions to get familiar with the basic features j-scribe offers.
3. Open new or existing notes with `j-scribe-notes serve <filename>` (Optionally include a filepath: `j-scribe-notes serve <path/filename>`).
4. Run `j-scribe-notes --help` for additional help

## Preview

![j-scribe preview](assets/j-scribe_preview.webp)

## Lessons Learned

- **Best Practices** for designing and building advanced, **production-ready** apps.
- Integrating **Typescript**, **React** and **React-Redux** together.
- Designing highly **reusable React components**.
- Creating a **custom plugin** for **Esbuild** to enable in-browser transpiling/bundling with support for imports from npm.
- Creating a **caching layer** for imported modules/bundled code using Local-Forage.
- Using **Redux-Middlewares** for handling complex business logic.
- Taking advantage of powerful **third-party libraries** such as: bulma, immer, monaco-editor, react-md-editor, commander, etc...
- **Safely handling user-input** by utilizing iframes as a code-execution environment- the same technique used by popular sites such as Codepen.
- Utilizing lerna and nx to create a **mono-repo** with multiple packages and build targets.
- Creating a **Restful-API** to serve up a **Front-End application** from a **CLI**.
- Utilizing **web-assembly** to go... **BLAZINGLY FAST!**
- **Deploying** to npm and vercel.

## Acknowledgements

- [Udemy - React and Typescript: Build a Portfolio Project](https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/)
- [readme.so](https://readme.so/editor)
- [Simple Icons](https://simpleicons.org/?q=redux)
- [shields.io](https://shields.io/)

## Authors

- [Rio Edwards](https://www.github.com/rioredwards)
