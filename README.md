# uniqlet 🔑

A tiny, fast, and flexible random ID generator for Node.js & TypeScript.

### Features
- ⚡ Super small & dependency-free
- 🔑 Configurable length
- 🏷️ Prefix support with validation
- 🌍 URL-safe alphabet (Crockford Base32)
- 🛡️ Input validation & error handling
- 🔧 Utility functions for parsing IDs

---

## Installation
```bash
npm install uniqlet
```

## Usage

### Basic Usage
```typescript
import { uniqlet } from 'uniqlet';

// Generate a random ID with default length (21 characters)
const id = uniqlet();
console.log(id); // e.g., "Kx9mN2pQ7vR4sT8uW1yZ3"
```

### Custom Length
```typescript
import { uniqlet } from 'uniqlet';

// Generate a shorter ID
const shortId = uniqlet({ length: 8 });
console.log(shortId); // e.g., "A7b2C9d1"

// Generate a longer ID
const longId = uniqlet({ length: 32 });
console.log(longId); // e.g., "Kx9mN2pQ7vR4sT8uW1yZ3A7b2C9d1E5f6G8"
```

### With Prefix
```typescript
import { uniqlet } from 'uniqlet';

// Generate ID with prefix
const userId = uniqlet({ prefix: 'user' });
console.log(userId); // e.g., "user_Kx9mN2pQ7vR4sT8uW1yZ3"

const sessionId = uniqlet({ prefix: 'session', length: 12 });
console.log(sessionId); // e.g., "session_A7b2C9d1E5f6"
```

### Common Use Cases
```typescript
import { uniqlet } from 'uniqlet';

// Database record IDs
const recordId = uniqlet({ prefix: 'rec' });

// API keys
const apiKey = uniqlet({ length: 32 });

// Session tokens
const sessionToken = uniqlet({ prefix: 'sess', length: 16 });

// File upload IDs
const uploadId = uniqlet({ prefix: 'upload' });

// Short URLs
const shortUrl = uniqlet({ length: 6 }); // e.g., "a7b2c9"
```

## Utility Functions

### Parse Generated IDs
```typescript
import { getPrefix, getSuffix, parseUniqlet } from 'uniqlet';

const userId = uniqlet({ prefix: 'user' }); // e.g., "user_a7b2c9d1e5f6g8h9j0k1"

// Extract parts
const prefix = getPrefix(userId); // "user"
const suffix = getSuffix(userId); // "a7b2c9d1e5f6g8h9j0k1"

// Parse into object
const parsed = parseUniqlet(userId);
console.log(parsed); // { prefix: "user", suffix: "a7b2c9d1e5f6g8h9j0k1" }
```

### Validation
```typescript
// Valid prefixes (lowercase letters, digits, underscores, max 63 chars)
uniqlet({ prefix: 'user' });        // ✅ Valid
uniqlet({ prefix: 'user_session' }); // ✅ Valid
uniqlet({ prefix: 'api_key_v2' });   // ✅ Valid
uniqlet({ prefix: 'session_v2' });   // ✅ Valid

// Invalid prefixes will throw errors
uniqlet({ prefix: 'User' });        // ❌ Error: uppercase not allowed
uniqlet({ prefix: 'user-' });       // ❌ Error: hyphens not allowed
uniqlet({ prefix: '_user' });       // ❌ Error: cannot start with underscore
uniqlet({ prefix: 'user_' });       // ❌ Error: cannot end with underscore
```
