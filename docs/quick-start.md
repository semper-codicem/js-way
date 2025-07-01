# Quick Start: JavaScript Web App

This guide helps you build a simple web app to kickstart your JavaScript learning journey.

## 1. Create Project Files

Make a new folder and add these files:

- `index.html`
- `app.js`
- `style.css`

---

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS Quick Start App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello, JavaScript!</h1>
    <input id="nameInput" type="text" placeholder="Enter your name">
    <button onclick="greetUser()">Greet Me</button>
    <p id="greeting"></p>
    <script src="app.js"></script>
</body>
</html>
```

---

### `style.css`

```css
body {
    font-family: Arial, sans-serif;
    margin: 2em;
    background: #f9f9f9;
}
input, button {
    padding: 0.5em;
    margin-top: 1em;
}
```

---

### `app.js`

```js
function greetUser() {
    const name = document.getElementById('nameInput').value;
    const greeting = name ? `Hello, ${name}!` : 'Hello!';
    document.getElementById('greeting').textContent = greeting;
}
```

---

## 2. Run Your App

1. Open `index.html` in your browser.
2. Type your name and click **Greet Me**.

---

## 3. Next Steps

- Try changing the greeting message.
- Add more input fields.
- Explore JavaScript events and DOM manipulation.

Happy coding!