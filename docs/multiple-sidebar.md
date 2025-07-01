To **add a navbar menu** and create **multiple sidebar menus for different subfolders** in **Docsify**, you can follow these steps:

---

## ✅ 1. Add a Navbar Menu in Docsify

### Step 1: Create a `_navbar.md` file

Docsify supports a file called `_navbar.md` which defines the top navigation bar.

#### Example `_navbar.md`

```markdown
* [Home](/)
* [Guide](/guide/)
* [About](/about)
* [GitHub](https://github.com/your-repo)
```

### Step 2: Enable the Navbar in `index.html`

Ensure your `window.$docsify` config includes `loadNavbar: true`.

```html
<script>
  window.$docsify = {
    loadNavbar: true,
    // other options
  }
</script>
```

---

## ✅ 2. Use Multiple Sidebar Menus for Different Subfolders

Docsify allows **per-folder sidebar configuration** by placing `_sidebar.md` inside each folder.

### Folder Structure Example

```
docs/
├── index.html
├── _navbar.md
├── _sidebar.md              <-- Default sidebar (for root)
├── guide/
│   ├── README.md
│   └── _sidebar.md          <-- Sidebar specific to /guide/
├── tutorial/
│   ├── README.md
│   └── _sidebar.md          <-- Sidebar specific to /tutorial/
```

### Step 1: Enable `loadSidebar` in `index.html`

```html
<script>
  window.$docsify = {
    loadSidebar: true,
    subMaxLevel: 2,
    // other options
  }
</script>
```

### Step 2: Create `_sidebar.md` in each subfolder

Each `_sidebar.md` applies **only to that subfolder**.

#### `guide/_sidebar.md`

```markdown
* [Guide Home](/guide/)
* [Installation](/guide/installation)
* [Usage](/guide/usage)
```

#### `tutorial/_sidebar.md`

```markdown
* [Tutorial Home](/tutorial/)
* [Step 1](/tutorial/step1)
* [Step 2](/tutorial/step2)
```

---

## 🔁 Recap of Files You Need

| File                 | Purpose                      |
| -------------------- | ---------------------------- |
| `_navbar.md`         | Global top navigation menu   |
| `_sidebar.md`        | Default sidebar for root     |
| `folder/_sidebar.md` | Custom sidebar per subfolder |

---

## 🔧 Optional Enhancements

* Use [alias paths](https://docsify.js.org/#/more-pages?id=alias) to simplify linking.
* Add a `coverpage.md` for landing page customization.
* Customize styles with CSS for a unique layout.
