# Random Code Generator

This simple web application generates random codes using either alphabet characters or a combination of letters and numbers. The generated codes can be used for various purposes, such as password generation or unique identifiers.


## Getting Started

To use this code generator, simply include the HTML structure provided in your project. The generator is designed to create codes dynamically using either alphabet characters or a combination of letters and numbers.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <title>Random Code Generator</title>
</head>
<body>

</body>
</html>
```

## Usage

The application provides two main functions for generating codes:

1. **Alphabetic Code Generation:**
   - Function: `generateCode(num, value)`
   - Parameters:
     - `num`: Number of characters in the generated code (default is 6).
     - `value`: Determines whether the code contains only letters (`true`) or both letters and numbers (`false`, default).

2. **UTF-16 Character Code Generation:**
   - Function: `generateCode2(num, value)`
   - Parameters:
     - `num`: Number of characters in the generated code (default is 6).
     - `value`: Determines whether the code contains only letters (`true`) or a mix of letters and numbers (`false`, default).

## Code Examples

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