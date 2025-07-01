# Authentication

Learn how to authenticate with our API.

## Overview

Our API uses token-based authentication. You'll need to obtain an API key and include it in your requests.

## Getting an API Key

1. Sign up for an account
2. Navigate to your dashboard
3. Generate a new API key

## Using the API Key

Include your API key in the request headers:

```javascript
const response = await fetch('/api/data', {
  headers: {
    'Authorization': 'Bearer your-api-key-here',
    'Content-Type': 'application/json'
  }
});
```

## Security Best Practices

- Never expose your API key in client-side code
- Rotate your keys regularly
- Use environment variables to store sensitive data
