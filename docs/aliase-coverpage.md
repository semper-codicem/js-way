Sure! Let’s break down two important Docsify features:

---

## 🔁 **1. Alias Paths in Docsify**

### 🔍 What Are Alias Paths?

**Alias paths** allow you to simplify Markdown links when your project has a nested folder structure. Instead of writing full paths like `/guide/installation.md`, you can use a shortened version, and Docsify will resolve the correct file.

### 🚀 How to Use Alias Paths

In your Markdown files (like `_sidebar.md`, `_navbar.md`, or `README.md`), use this syntax:

```markdown
[Installation Guide](#/guide/installation)
```

* `#/` tells Docsify to handle routing.
* `/guide/installation` is the path to `guide/installation.md`.

💡 You **don’t need to add `.md`** at the end. Docsify handles that.

### ✅ Example

Suppose you have:

```
/docs/
├── guide/
│   └── installation.md
```

In `_sidebar.md`, you can write:

```markdown
* [Installation](#/guide/installation)
```

---

## 🎨 **2. Adding a Cover Page (`coverpage.md`)**

### 📘 What is a Cover Page?

A **cover page** in Docsify is an optional, visually appealing landing screen with a logo, description, and call-to-action button before users access the main docs.

### 🔧 Step-by-Step Setup

#### ✅ Step 1: Create a `coverpage.md` file

Example `coverpage.md`:

```markdown
<!-- _coverpage.md -->

# My Project <small>v1.0</small>

> A simple Docsify documentation site.

[GitHub](https://github.com/your-repo)
[Get Started](#/)
```

You can also use inline styles and background images.

---

#### ✅ Step 2: Enable the Cover Page in `index.html`

Update your `window.$docsify` config:

```html
<script>
  window.$docsify = {
    loadSidebar: true,
    loadNavbar: true,
    coverpage: true,
    onlyCover: false  // optional, if true, cover page is shown only on the homepage
  }
</script>
```

---

### 🌄 Optional: Add a Background Image

Add a background image by customizing the first line of `coverpage.md`:

```markdown
<!-- _coverpage.md -->

![background](https://your-image-url.com/bg.jpg)

# My Docs <small>v1.0</small>

> Clean and beautiful documentation

[GitHub](https://github.com/your-repo)
[Get Started](#/)
```

---

## 🧩 Summary

| Feature     | Purpose                                | File            |
| ----------- | -------------------------------------- | --------------- |
| Alias Paths | Simplifies linking to nested pages     | Markdown files  |
| Cover Page  | Creates a custom landing page for docs | `_coverpage.md` |

