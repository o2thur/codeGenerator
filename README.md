# [Random Code Generator](https://o2thur.github.io/codeGenerator/)

This simple web application generates random codes using either alphabet characters or a combination of letters and numbers. The generated codes can be used for various purposes, such as password generation or unique identifiers.


## Getting Started

To use this code generator, simply inspect the page and use the console. The generator is designed to create codes dynamically using either alphabet characters or a combination of letters and numbers.

## Usage

The application provides the same result using two different methods:

1. **Alphabetic Code Generation:**
   - Function: `generateCode(num, value)`

2. **UTF-16 Character Code Generation:**
   - Function: `generateCode2(num, value)`

### Example 1: Alphabetic Code Generation

```javascript
// Generate a random alphabetic code with default parameters
generateCode(); // Returns a 6-character code containing only letters
```

### Example 2: Alphanumeric Code Generation

```javascript
// Generate a random alphanumeric code with 8 characters
generateCode(8, false); // Returns an 8-character code containing letters and numbers
```

### Example 3: UTF-16 Character Code Generation

```javascript
// Generate a random UTF-16 character code with default parameters
generateCode2(); // Returns a 6-character code containing either letters or numbers
```

### Example 4: UTF-16 Alphabetic Code Generation

```javascript
// Generate a random UTF-16 alphabetic code with 10 characters
generateCode2(10, true); // Returns a 10-character code containing only letters
```
