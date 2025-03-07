
# ShatterJS

>*Since these things are so, we must agree that that which keeps its own form unchangingly, which has not been brought into being and is not destroyed, which neither receives into itself anything else from anywhere else, nor itself enters into anything anywhere, is one thing*
>
> — ***Plato***, *Timaeus*
----------

Decomposes JavaScript files into their four fundamental components: **shebang**, **header**, **body**, and **footer**. 

[![npm version](https://img.shields.io/npm/v/shatterjs)](https://www.npmjs.com/package/shatterjs) [![npm downloads](https://img.shields.io/npm/dt/shatterjs)](https://www.npmjs.com/package/shatterjs) [![license](https://img.shields.io/github/license/alexstevovich/shatterjs)](https://github.com/yourusername/shatterjs/blob/main/LICENSE) [![bundle size](https://img.shields.io/bundlephobia/minzip/shatterjs)](https://bundlephobia.com/package/shatterjs)

## Features

-  Each component is an OOP object that can easily be worked with.
-  Header and Footer are subdivided further into comment blocks, comment lines or empty lines.

----------

## Warning
I have made the functionality as robust as I could currently foresee to accomplish the goals I had for this package. 

#### Please keep in mind:
- JavaScript document structure is complex, and it's likely I didn't consider all fringe cases and uses.
- The abstract nature of how documents are decomposed could lead to a rapidly evolving API that may not be compatible with current versions.  
- I will release a new major version for each breaking change, following a period of evaluation on the current `1.0.0` version.

**Note:** Use in production environments with caution due to potential structural changes in future major versions

----------

## 📦 Installation

```bash

npm install shatterjs

```

Or with Yarn:

```bash

yarn add shatterjs

```

----------

## 🚀 Quick Start



```js
import { Doc } from 'shatterjs';

const source = `
#!/usr/bin/env node
// This is a header comment
/* Multi-line
   block comment */
const hello = 'world';
console.log(hello);
// Footer note
`;

const doc = new Doc();
doc.from(source);

console.log('Shebang:', doc.shebang.content);
console.log('Header:', doc.head.content);
console.log('Body:', doc.body.content);
console.log('Footer:', doc.footer.content); 
```

----------

## 🧩 Component Breakdown

### Shebang
Detects the shebang line (if present).

---

### Head
Captures decorative comments before code starts.


### Body
Framed from the start of valid code to the end of valid code.

--- 

### Footer
All content after the last line of valid code.

--- 

### InlineComment
Single-line comments (e.g., `// comment`).

--- 

### BlockComment
Block comments spanning multiple lines  `/* comment */`

--- 

### EmptyLine
A line filled only with whitespace or a single line break `\n`.



## Project Links

I use GitHub as the primary public development spot:
[https://github.com/alexstevovich/shatterjs](https://github.com/alexstevovich/shatterjs)



## Why ShatterJS?

I created `ShatterJS` for my licensing preamble package [**LawfulGood**](https://github.com/alexstevovich/lawfulgood) to identify whether a preamble already exists and where to insert a block of licensing code at the start of a document.

I modularized the functionality as I can see other use cases for this beyond script licensing.

----------

## License

Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).