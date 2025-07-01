# Git & GitHub for Beginners

This tutorial will guide you through the basics of Git and GitHub, including installation, setup in Visual Studio Code, and making your first commit.

---

## What are Git and GitHub?

- **Git**: A version control system to track changes in your code.
- **GitHub**: A website to store your Git repositories online and collaborate with others.

---

## 1. Installing Git

1. Go to [git-scm.com](https://git-scm.com/).
2. Download the installer for your operating system.
3. Run the installer and follow the default steps.

---

## 2. Creating a GitHub Account

1. Visit [github.com](https://github.com/).
2. Click **Sign up** and follow the instructions.

---

## 3. Setting Up Git in Visual Studio Code

1. Open Visual Studio Code.
2. Install the **GitHub Pull Requests and Issues** extension (optional but helpful).
3. Open the terminal in VS Code (`Ctrl + ``).
4. Configure your Git identity:
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "your@email.com"
    ```

---

## 4. Logging into GitHub in VS Code

1. Click the **Accounts** icon in the bottom-left corner.
2. Select **Sign in to GitHub**.
3. Follow the prompts to authorize VS Code.

---

## 5. Creating a New Repository

1. On GitHub, click **New repository**.
2. Name your repo (e.g., `my-first-repo`), add a description, and click **Create repository**.

### Initialize Locally

```bash
git clone https://github.com/your-username/my-first-repo.git
cd my-first-repo
```

Or, to create a new repo locally:

```bash
mkdir my-first-repo
cd my-first-repo
git init
git remote add origin https://github.com/your-username/my-first-repo.git
```

---

## 6. Making Your First Commit

1. Create a file, e.g., `index.html`.
2. Add some content and save.

```bash
git add index.html
git commit -m "Add index.html"
```

---

## 7. Pushing to GitHub

```bash
git push -u origin main
```

---

## 8. Cloning an Existing Repository

```bash
git clone https://github.com/username/repository-name.git
```

---

## Summary

- Install Git and create a GitHub account.
- Set up Git in VS Code and log in.
- Create or clone a repository.
- Make changes, commit, and push to GitHub.

You're ready to start using Git and GitHub in your web development projects!