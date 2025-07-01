# Code Style Guide

Consistent code style makes your code more readable and maintainable.

## General Principles

- **Consistency**: Use the same style throughout your project
- **Readability**: Write code that others can easily understand
- **Simplicity**: Keep it simple and avoid unnecessary complexity

## JavaScript Style Guidelines

### Naming Conventions
```javascript
// Use camelCase for variables and functions
const userName = 'john_doe';
const getUserName = () => { /* ... */ };

// Use PascalCase for classes and constructors
class UserManager {
  constructor() { /* ... */ }
}

// Use UPPER_SNAKE_CASE for constants
const API_BASE_URL = 'https://api.example.com';
```

### Code Formatting
- Use 2 spaces for indentation
- Always use semicolons
- Use single quotes for strings
- Add trailing commas in objects and arrays

### Example
```javascript
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
};
```

## Tools for Enforcement

- **Prettier**: Automatic code formatting
- **ESLint**: Code linting and style checking
- **EditorConfig**: Consistent editor settings
