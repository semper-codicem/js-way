**Package Managers in Node.js Apps**

A package manager is a tool that helps you install, update, and manage libraries (called "packages" or "modules") that your Node.js app depends on. The most popular package manager for Node.js is **npm** (Node Package Manager).

### Why Use a Package Manager?
- **Easily add features**: Instead of writing everything from scratch, you can use packages made by others (like frameworks, tools, or UI libraries).
- **Manage dependencies**: Keeps track of which packages your project uses and their versions.
- **Share your project**: Others can install all needed packages with a single command.

### How npm Works
- Packages are listed in a file called package.json.
- You install packages using commands like `npm install`.
- Installed packages are saved in a folder called node_modules.

---

### Example: Simple Web Development Project

Suppose you want to build a web server using the popular package **Express**.

**Step 1: Initialize your project**
```bash
npm init -y
```
This creates a package.json file.

**Step 2: Install Express**
```bash
npm install express
```
This adds Express to your project and updates package.json.

**Step 3: Create a simple server**
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

**Step 4: Run your server**
```bash
node index.js
```

---

**Summary:**  
A package manager like npm makes it easy to add, update, and manage code libraries in your Node.js projects, so you can focus on building your app instead of reinventing the wheel.