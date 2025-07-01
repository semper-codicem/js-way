Adding and using a CSS library in **Docsify** is straightforward since Docsify is a **client-side** (JavaScript-based) documentation tool. You can use any CSS library (like Bootstrap, Tailwind, Bulma, etc.) just by including its CDN in your `index.html`.

---

## 🧩 1. **Where to Add CSS Libraries**

Edit your **`index.html`** file in the root of your Docsify project. You’ll add the `<link>` tag for the CSS library in the `<head>` section.

---

## 🛠️ 2. **Examples of Adding Popular CSS Libraries**

### ✅ Bootstrap

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  >
</head>
```

You can now use Bootstrap classes in your Markdown:

```markdown
<div class="alert alert-warning" role="alert">
  This is a Bootstrap warning alert!
</div>
```

---

### ✅ Tailwind CSS

```html
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
```

Use Tailwind utility classes in Markdown:

```markdown
<div class="bg-blue-100 text-blue-800 p-4 rounded">
  This is a Tailwind-styled box.
</div>
```

---

### ✅ Bulma CSS

```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>
```

Use Bulma components:

```markdown
<div class="notification is-info">
  Bulma is active!
</div>
```

---

## 🎨 3. **Add Your Own Custom CSS**

You can also write your own styles.

### Step 1: Create a CSS file

Create a file called `style.css` in the same directory as `index.html`.

### Step 2: Link it in `index.html`

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

### Step 3: Add custom styles in `style.css`

```css
.markdown-section h1 {
  color: #2b8a3e;
  border-bottom: 2px solid #2b8a3e;
}
```

---

## 📘 4. **Use Custom Classes in Markdown**

You can mix Markdown and HTML like this:

```markdown
<div class="my-custom-box">
  This box uses custom CSS!
</div>
```

Then in `style.css`:

```css
.my-custom-box {
  background: #f0f0f0;
  padding: 1rem;
  border-left: 4px solid #4CAF50;
}
```

---

## ✅ Summary

| Method      | How                             | Example                                    |
| ----------- | ------------------------------- | ------------------------------------------ |
| CDN Link    | Add in `<head>` of `index.html` | Bootstrap, Tailwind, Bulma, etc.           |
| Custom CSS  | Link to your own `.css` file    | `<link rel="stylesheet" href="style.css">` |
| In Markdown | Use inline HTML with classes    | `<div class="alert alert-info">`           |

