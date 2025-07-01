# How to Install Visual Studio Code and Create a Simple JS Project

## Step 1: Download Visual Studio Code

1. Open your web browser.
2. Go to the [Visual Studio Code website](https://code.visualstudio.com/).
3. Click the **Download** button for your operating system (Windows, macOS, or Linux).
4. Wait for the download to finish.

## Step 2: Install Visual Studio Code

### On Windows

1. Double-click the downloaded `.exe` file.
2. Follow the installation wizard:
    - Accept the license agreement.
    - Choose the installation location (default is fine).
    - Select additional tasks (you can check "Add to PATH" and "Create a desktop icon").
    - Click **Install**.
3. Click **Finish** to launch Visual Studio Code.

### On macOS

1. Open the downloaded `.zip` file.
2. Drag the **Visual Studio Code** app to your **Applications** folder.
3. Open **Visual Studio Code** from the Applications folder.

### On Linux

1. Follow the instructions on the [official website](https://code.visualstudio.com/docs/setup/linux) for your distribution.

## Step 3: Open Visual Studio Code

- Double-click the Visual Studio Code icon on your desktop or in your applications menu.

## Step 4: Create a Simple JavaScript Project

### 1. Create a Project Folder

1. In your file explorer, create a new folder called `my-js-project`.
2. Open Visual Studio Code.
3. Click **File > Open Folder...** and select `my-js-project`.

### 2. Create Project Files

1. In Visual Studio Code, click the **New File** icon in the Explorer panel.
2. Create three files:
    - `index.html`
    - `style.css`
    - `script.js`

### 3. Add Code to Each File

#### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My JS Project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello, JavaScript!</h1>
  <button onclick="sayHello()">Click Me</button>
  <script src="script.js"></script>
</body>
</html>
```

#### `style.css`
```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}
```

#### `script.js`
```js
function sayHello() {
  alert('Hello from JavaScript!');
}
```

### 4. Open Your Project in a Browser

1. In Visual Studio Code, right-click `index.html` and select **Open with Default Browser** (or open the file manually in your browser).
2. Click the button to see your JavaScript in action!

---

You have now installed Visual Studio Code and created a simple JavaScript project with HTML, CSS, and JS files.