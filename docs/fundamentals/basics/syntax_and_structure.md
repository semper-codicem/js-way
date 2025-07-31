## ✅ 2. JavaScript Syntax and Structure

Understanding JavaScript’s syntax is crucial for writing correct and readable code. In this section, we’ll cover the fundamental building blocks of JavaScript’s structure, including how statements are written, how comments work, and the role of whitespace.

---

### 🔡 **Case Sensitivity**

JavaScript is **case-sensitive**, which means:

* `myVariable` and `myvariable` are **different identifiers**
* Keywords and object properties must be spelled with exact casing

✅ **Example:**

```js
let name = "Alice";
let Name = "Bob";

console.log(name); // Alice
console.log(Name); // Bob
```

🛑 **Incorrect usage:**

```js
let myName = "John";
console.log(MyName); // ReferenceError: MyName is not defined
```

➡️ **Tip:** Stick to a consistent naming convention like **camelCase** for variables and functions (`userAge`, `getUserName()`).

---

### 🔚 **Statements and Semicolons**

A **statement** is a single line of code that performs an action.

JavaScript automatically adds semicolons **(automatic semicolon insertion - ASI)**, but it’s **good practice to add them manually** for clarity and to avoid unexpected bugs.

✅ **Example:**

```js
let age = 25;
console.log(age);
```

Without semicolons, this can sometimes cause issues:

```js
let a = 5
let b = 10
console.log(a + b) // Works, but risky in complex code
```

➡️ **Best Practice:** Always end your statements with a semicolon `;`.

---

### 💬 **Comments**

Comments help explain code to yourself and others. JavaScript ignores comments during execution.

#### ✅ Single-line comments

Use `//` for short comments.

```js
// This is a single-line comment
let score = 100; // Declaring a variable
```

#### ✅ Multi-line comments

Use `/* */` to span multiple lines.

```js
/*
  This is a multi-line comment.
  It can describe complex logic
  or disable multiple lines temporarily.
*/
console.log("Hello World");
```

➡️ **Tip:** Comment your code as you learn—it helps reinforce what you're doing.

---

### ⬜ **Whitespace and Indentation**

**Whitespace** refers to spaces, tabs, and line breaks. JavaScript ignores extra whitespace, but it's essential for **readability**.

**Indentation** helps structure your code, especially in blocks like functions and conditionals.

✅ **Example:**

```js
function greet(name) {
  if (name) {
    console.log("Hello, " + name);
  }
}
```

🛑 Poorly formatted code:

```js
function greet(name){if(name){console.log("Hello, "+name);}}
```

➡️ **Best Practices:**

* Use **2 or 4 spaces** for indentation (stick to one consistently)
* Use line breaks between logical blocks of code
* Use a code linter or formatter (like Prettier) to automate clean formatting

---

### 📝 Summary

| Concept              | Description                                        |
| -------------------- | -------------------------------------------------- |
| **Case sensitivity** | `Name` and `name` are different                    |
| **Statements**       | Each action (line of code) is a statement          |
| **Semicolons**       | Optional but recommended to end statements         |
| **Comments**         | Use `//` and `/* */` for documenting code          |
| **Whitespace**       | Doesn’t affect execution, but improves readability |

---

### 🔁 Quick Practice

✅ What will this print?

```js
let color = "blue"
let Color = "red"

console.log(color);
console.log(Color);
```

✍️ **Your Turn**:
Write a small function that logs your name, and include both single-line and multi-line comments.
