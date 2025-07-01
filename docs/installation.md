# Installing Node.js and Running Simple Projects

## 1. Download Node.js

- Visit the [official Node.js website](https://nodejs.org/).
- Download the **LTS (Recommended)** version for your operating system (Windows, macOS, or Linux).

## 2. Install Node.js

- Run the downloaded installer.
- Follow the installation prompts (accept license, choose install location, etc.).
- Ensure the option to add Node.js to your system PATH is checked.

## 3. Verify Installation

Open your terminal or command prompt and run:

```sh
node -v
npm -v
```

You should see version numbers for both Node.js and npm.

## 4. Create a Simple Project

- Create a new folder for your project:

```sh
mkdir my-node-project
cd my-node-project
```

- Initialize a new Node.js project:

```sh
npm init -y
```

## 5. Create and Run a Simple Script

- Create a file named `app.js`:

```js
// app.js
console.log('Hello, Node.js!');
```

- Run the script:

```sh
node app.js
```

You should see `Hello, Node.js!` printed in your terminal.

## 6. Next Steps

- Explore installing packages with `npm install <package-name>`.
- Read the [Node.js documentation](https://nodejs.org/en/docs/) for more features.
