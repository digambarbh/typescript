# TypeScript Variables

A complete guide to declaring and working with variables in TypeScript.

## Table of Contents

- [TypeScript Variables](#typescript-variables)
  - [Table of Contents](#table-of-contents)
  - [Declaration Keywords](#declaration-keywords)
  - [Type Annotations](#type-annotations)
  - [Type Inference](#type-inference)
  - [Primitive Types](#primitive-types)
  - [Special Types](#special-types)
  - [Union \& Literal Types](#union--literal-types)
  - [Arrays \& Tuples](#arrays--tuples)
  - [Objects \& Interfaces](#objects--interfaces)
  - [Enums](#enums)
  - [const vs let vs var](#const-vs-let-vs-var)
  - [Type Assertions](#type-assertions)
  - [Best Practices](#best-practices)
  - [License](#license)

---

## Declaration Keywords

TypeScript uses the same three keywords as JavaScript to declare variables:

```typescript
let age: number = 25;
const name: string = "Digambar";
var isOld: boolean = false; // avoid using var
```

| Keyword | Reassignable | Block Scoped | Recommended |
|---------|-------------|--------------|-------------|
| `var`   | Yes         | No (function scoped) | ❌ No |
| `let`   | Yes         | Yes          | ✅ Yes (when reassignment needed) |
| `const` | No          | Yes          | ✅ Yes (default choice) |

---

## Type Annotations

You can explicitly declare a variable's type using a colon `:`.

```typescript
let username: string = "digambar";
let score: number = 100;
let isActive: boolean = true;
```

---

## Type Inference

If you don't provide a type, TypeScript infers it from the assigned value.

```typescript
let city = "Pune";       // inferred as string
let year = 2026;         // inferred as number
let isStudent = true;    // inferred as boolean
```

> ⚠️ Once inferred, the type is locked — `city = 42` would throw an error.

---

## Primitive Types

```typescript
let a: string = "hello";
let b: number = 42;
let c: boolean = true;
let d: null = null;
let e: undefined = undefined;
let f: bigint = 100n;
let g: symbol = Symbol("id");
```

---

## Special Types

| Type      | Description |
|-----------|-------------|
| `any`     | Disables type checking (avoid when possible) |
| `unknown` | Type-safe alternative to `any`, requires narrowing before use |
| `void`    | Used for functions that return nothing |
| `never`   | Represents values that never occur (e.g., a function that always throws) |

```typescript
let flexible: any = 10;
flexible = "now a string"; // allowed, no type safety

let notSure: unknown = 4;
if (typeof notSure === "number") {
  console.log(notSure + 1); // safe after narrowing
}

function logMessage(): void {
  console.log("no return value");
}

function throwError(): never {
  throw new Error("Something failed");
}
```

---

## Union & Literal Types

```typescript
let id: string | number;
id = 101;
id = "A101";

let direction: "up" | "down" | "left" | "right";
direction = "up"; // only these 4 values are valid
```

---

## Arrays & Tuples

```typescript
// Arrays
let scores: number[] = [10, 20, 30];
let names: Array<string> = ["Alice", "Bob"];

// Tuples (fixed length, fixed types per position)
let user: [string, number] = ["Digambar", 21];
```

---

## Objects & Interfaces

```typescript
let student: { name: string; age: number } = {
  name: "Digambar",
  age: 21,
};

// Reusable shape with an interface
interface Student {
  name: string;
  age: number;
  isEnrolled?: boolean; // optional property
}

const s1: Student = { name: "Digambar", age: 21 };
```

---

## Enums

```typescript
enum Role {
  Admin,
  User,
  Guest,
}

let myRole: Role = Role.User; // 1
```

---

## const vs let vs var

```typescript
const PI = 3.14;
// PI = 3.14159; ❌ Error: cannot reassign a const

let counter = 0;
counter += 1; // ✅ allowed

var oldStyle = "avoid me";
// var is function-scoped, can cause bugs with closures/loops
```

**Rule of thumb:** default to `const`, use `let` only when you need to reassign, and avoid `var` entirely.

---

## Type Assertions

Tell TypeScript to treat a value as a specific type when you know more than the compiler does.

```typescript
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// Alternative syntax (not usable in .tsx files)
let strLength2: number = (<string>someValue).length;
```

---

## Best Practices

- ✅ Prefer `const` by default; use `let` only when reassignment is required
- ✅ Avoid `var` completely
- ✅ Let TypeScript infer types for simple, obvious values
- ✅ Add explicit annotations for function parameters and public APIs
- ✅ Avoid `any` — use `unknown` when the type is genuinely uncertain
- ✅ Use union types instead of `any` for variables with a few possible types
- ✅ Use `interface` or `type` for structured/object-shaped variables

---

## License

Free to use for learning and reference purposes.