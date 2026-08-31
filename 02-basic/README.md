# TypeScript Fundamentals

This section introduces the core concepts you need to understand before working seriously with TypeScript. You will learn **what TypeScript is, how it differs from JavaScript, how TypeScript code is compiled, and how to run it efficiently during development.**

---

## 1. What is TypeScript?

**TypeScript (TS)** is a programming language developed by Microsoft that extends JavaScript by adding **static typing** and other development features.

### TypeScript is a Superset of JavaScript

TypeScript is built on top of JavaScript.

> **Every valid JavaScript program is generally valid TypeScript code.**

For example:

```typescript
const name = "Diga";
console.log(name);
```

This is valid in both JavaScript and TypeScript.

TypeScript adds additional capabilities such as:

* Static type checking
* Interfaces
* Type aliases
* Generics
* Enums
* Access modifiers
* Better tooling and IDE support
* Compile-time error detection

### TypeScript vs JavaScript

| Feature              | JavaScript     | TypeScript                    |
| -------------------- | -------------- | ----------------------------- |
| Typing               | Dynamic        | Static + Dynamic capabilities |
| Type checking        | Mainly runtime | Compile time                  |
| Type annotations     | ❌              | ✅                             |
| Interfaces           | ❌              | ✅                             |
| Generics             | ❌              | ✅                             |
| Compilation required | ❌              | ✅                             |
| Better IDE support   | Good           | Excellent                     |

---

## 2. Static Typing

One of TypeScript's most important features is **static type checking**.

In JavaScript, a variable can change its type:

```javascript
let age = 22;
age = "twenty-two";
```

JavaScript allows this because it is dynamically typed.

In TypeScript, you can explicitly define the expected type:

```typescript
let age: number = 22;

age = "twenty-two"; // ❌ Type error
```

The TypeScript compiler detects the problem **before the program runs**.

### Why is this useful?

Static typing helps you:

* Catch errors earlier
* Understand what data a variable should contain
* Improve code readability
* Get better IDE autocomplete
* Refactor large projects more safely
* Reduce common runtime errors

---

## 3. TypeScript Does Not Run Directly

Browsers and Node.js execute **JavaScript**, not TypeScript syntax.

Therefore, TypeScript needs to be transformed into JavaScript before it can normally be executed.

```text
TypeScript
    ↓
TypeScript Compiler
    ↓
JavaScript
    ↓
Browser / Node.js
```

For example:

```typescript
const message: string = "Hello TypeScript";

console.log(message);
```

After compilation, it can become JavaScript similar to:

```javascript
const message = "Hello TypeScript";

console.log(message);
```

The JavaScript output can then be executed by Node.js or a browser.

### Compile vs Transpile

You will often hear the term **transpile** when discussing TypeScript.

More precisely:

> TypeScript is transformed into JavaScript, generally called **transpilation**, because both languages belong to the same broad family of source-level programming languages.

---

# 4. The TypeScript Compiler (`tsc`)

The **TypeScript Compiler**, commonly called `tsc`, converts TypeScript code into JavaScript and performs type checking.

You can install TypeScript using npm.

### Install TypeScript globally

```bash
npm install -g typescript
```

For most projects, however, installing TypeScript **locally as a development dependency** is preferable:

```bash
npm install -D typescript
```

This keeps the TypeScript version tied to the project.

---

## 5. Check the TypeScript Version

Use:

```bash
tsc -v
```

Example:

```text
Version 5.x.x
```

This confirms that the TypeScript compiler is available.

---

# 6. Compile a TypeScript File

Suppose you have:

```text
hello.ts
```

Run:

```bash
tsc hello.ts
```

TypeScript generates:

```text
hello.js
```

You can then execute the JavaScript with Node.js:

```bash
node hello.js
```

### Complete flow

```text
hello.ts
   ↓
tsc hello.ts
   ↓
hello.js
   ↓
node hello.js
```

---

# 7. Watch Mode

During development, you don't want to manually compile your TypeScript file every time you make a change.

Use:

```bash
tsc --watch hello.ts
```

or:

```bash
tsc -w hello.ts
```

The compiler continuously watches the file.

Whenever you save changes:

```text
Edit hello.ts
      ↓
Save
      ↓
TypeScript detects change
      ↓
Automatically compiles
      ↓
hello.js updated
```

This is especially useful during development.

---

# 8. `tsconfig.json`

For a real TypeScript project, you normally don't want to specify compiler options manually every time.

Create a configuration file with:

```bash
tsc --init
```

This generates:

```text
tsconfig.json
```

The file controls how TypeScript behaves.

For example:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "strict": true,
    "outDir": "./dist"
  }
}
```

Important compiler options include:

| Option            | Purpose                                         |
| ----------------- | ----------------------------------------------- |
| `target`          | Determines the JavaScript version to generate   |
| `module`          | Controls the JavaScript module system           |
| `strict`          | Enables strict type-checking rules              |
| `outDir`          | Specifies where compiled JavaScript is placed   |
| `rootDir`         | Specifies the source directory                  |
| `sourceMap`       | Generates source maps for debugging             |
| `esModuleInterop` | Improves interoperability with CommonJS modules |

Once `tsconfig.json` exists, you can generally compile the project with:

```bash
tsc
```

---

# 9. Running TypeScript More Easily

Manually compiling TypeScript and then running the generated JavaScript can become repetitive.

Development tools can simplify this process.

## `ts-node`

`ts-node` allows TypeScript files to be executed in a Node.js development environment without manually running `tsc` first.

Install it:

```bash
npm install -D ts-node
```

Run a file:

```bash
npx ts-node app.ts
```

### Development flow

Instead of:

```text
app.ts
 ↓
tsc
 ↓
app.js
 ↓
node app.js
```

You can use:

```text
app.ts
 ↓
ts-node
 ↓
Execution
```

> `ts-node` is primarily a development tool. Production applications commonly compile TypeScript to JavaScript and execute the generated JavaScript.

---

# 10. `tsx`

`tsx` is another popular tool for running TypeScript in Node.js projects.

Install it:

```bash
npm install -D tsx
```

Run:

```bash
npx tsx app.ts
```

It is commonly used because of its simple workflow and fast development experience.

You can also use watch mode:

```bash
npx tsx watch app.ts
```

This automatically restarts the application when source files change.

---

# 11. Basic Type Annotations

The fundamental syntax for declaring a type is:

```typescript
let variableName: type = value;
```

The colon `:` is used to specify the type.

### Examples

```typescript
let username: string = "Diga";

let age: number = 22;

let isDeveloper: boolean = true;
```

TypeScript now knows what type of value each variable is expected to contain.

For example:

```typescript
let age: number = 22;

age = 25;        // ✅ Valid
age = "twenty";  // ❌ Error
```

---

# 12. Type Annotations in Functions

Types can also be applied to function parameters and return values.

```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

Here:

```text
a: number
b: number
```

specifies the parameter types.

And:

```text
): number
```

specifies the function's return type.

Example:

```typescript
const result = add(10, 20);
```

The result is inferred as:

```typescript
number
```

---

# 13. Type Inference

TypeScript does not always require you to explicitly write types.

It can often **infer** the type from the assigned value.

```typescript
let name = "Diga";
```

TypeScript understands:

```typescript
let name: string;
```

Similarly:

```typescript
let age = 22;
```

TypeScript infers:

```typescript
let age: number;
```

Therefore, you don't need to annotate every variable.

### Explicit typing

```typescript
let age: number = 22;
```

### Type inference

```typescript
let age = 22;
```

Both are valid.

> **Good TypeScript code uses explicit types where they improve clarity, while allowing type inference where the type is obvious.**

---

# 14. TypeScript Development Workflow

A typical TypeScript project follows this process:

```text
                    ┌─────────────────┐
                    │ Write TypeScript│
                    │     (.ts)       │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Type Checking   │
                    │   + Transpile   │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   JavaScript    │
                    │     (.js)       │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Browser / Node  │
                    └─────────────────┘
```

For development, tools such as `tsx` can simplify this workflow.

---

# 15. Recommended Project Structure

A simple TypeScript Node.js project can look like:

```text
my-project/
│
├── src/
│   └── index.ts
│
├── dist/
│   └── index.js
│
├── node_modules/
│
├── package.json
├── package-lock.json
└── tsconfig.json
```

### Purpose of each directory

**`src/`**

Contains your TypeScript source code.

**`dist/`**

Contains the generated JavaScript files.

**`node_modules/`**

Contains installed npm packages.

**`tsconfig.json`**

Contains TypeScript compiler configuration.

**`package.json`**

Contains project metadata, dependencies, and scripts.

---

# 16. Essential Commands

Keep these commands handy:

| Command                 | Purpose                               |
| ----------------------- | ------------------------------------- |
| `tsc -v`                | Check TypeScript version              |
| `tsc file.ts`           | Compile a TypeScript file             |
| `tsc`                   | Compile according to `tsconfig.json`  |
| `tsc --watch`           | Automatically compile changes         |
| `tsc --init`            | Create `tsconfig.json`                |
| `npx ts-node file.ts`   | Run TypeScript with ts-node           |
| `npx tsx file.ts`       | Run TypeScript with tsx               |
| `npx tsx watch file.ts` | Run TypeScript with automatic restart |

---

# 💡 Pro Tips

### 1. Don't fear compiler errors

Those red squiggly lines in your IDE are useful.

They often tell you about a problem **before you run your application**.

Think of TypeScript as an additional safety layer:

```text
Your Code
   ↓
TypeScript checks it
   ↓
Problems detected early
   ↓
JavaScript
   ↓
Application
```

---

### 2. JavaScript knowledge is still essential

TypeScript does **not** replace JavaScript.

You should understand JavaScript concepts such as:

* Variables
* Functions
* Objects
* Arrays
* Classes
* Scope
* Closures
* Promises
* Async/await
* Modules
* DOM
* Event loop

before relying heavily on TypeScript.

> **TypeScript is JavaScript + a powerful type system and development tooling.**

---

### 3. Don't add types everywhere unnecessarily

Avoid writing unnecessary annotations when TypeScript can infer the type.

Instead of:

```typescript
const name: string = "Diga";
```

this is often sufficient:

```typescript
const name = "Diga";
```

But explicit types are valuable when they communicate an important contract:

```typescript
function calculatePrice(
    price: number,
    quantity: number
): number {
    return price * quantity;
}
```

---

# 🎯 Key Takeaways

* **TypeScript is a superset of JavaScript.**
* It adds **static type checking** and other developer-focused features.
* TypeScript code is normally **transformed into JavaScript** before execution.
* `tsc` is the official **TypeScript compiler**.
* `tsconfig.json` controls compiler and project settings.
* `tsc --watch` automatically recompiles files during development.
* `ts-node` and `tsx` simplify running TypeScript during development.
* Type annotations use the `:` syntax.
* TypeScript can automatically infer many types.
* Learning **JavaScript fundamentals first** makes learning TypeScript significantly easier.

### The core idea

```text
JavaScript
    +
Static Type System
    +
Developer Tooling
    ↓
TypeScript
```
