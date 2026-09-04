# TypeScript: Array, Tuple & Object — Complete Notes

---

## 1. Array

An array holds multiple values of the **same type**.

### Declaration syntax
```typescript
let nums: number[] = [1, 2, 3];
let names: string[] = ["a", "b", "c"];

// Generic syntax (equivalent)
let nums2: Array<number> = [1, 2, 3];
```

### Array of multiple types (union)
```typescript
let mixed: (number | string)[] = [1, "two", 3];
```

### Array of objects
```typescript
interface User {
  id: number;
  name: string;
}

let users: User[] = [
  { id: 1, name: "Digambar" },
  { id: 2, name: "Rahul" }
];
```

### 2D / nested arrays
```typescript
let grid: number[][] = [
  [1, 2],
  [3, 4]
];
```

### `readonly` arrays
```typescript
let arr: readonly number[] = [1, 2, 3];
// arr.push(4);   ❌ Error - readonly
// arr[0] = 10;   ❌ Error

// Alternative syntax
let arr2: ReadonlyArray<number> = [1, 2, 3];
```

### Common array methods (typed)
```typescript
let n: number[] = [1, 2, 3];

n.push(4);              // add
n.pop();                // remove last
n.map(x => x * 2);      // number[]
n.filter(x => x > 1);   // number[]
n.reduce((a, b) => a + b, 0); // number
n.forEach(x => console.log(x));
n.includes(2);           // boolean
n.find(x => x > 1);      // number | undefined
```

### `any[]` vs typed array
```typescript
let loose: any[] = [1, "two", true]; // avoid — loses type safety
```

### Key points
- Type is enforced for **every** element.
- Use union types (`(number | string)[]`) when mixed types are genuinely needed.
- Prefer `readonly` when the array should not be mutated.
- `Array<T>` and `T[]` are functionally identical — pick one style and stay consistent.

---

## 2. Tuple

A tuple is a **fixed-length array** where each position has a **specific, known type**. Order matters.

### Basic tuple
```typescript
let person: [string, number] = ["Digambar", 21];
// person[0] -> string
// person[1] -> number
```

### Accessing values
```typescript
let name = person[0]; // string
let age = person[1];  // number
```

### Wrong type / wrong length → compile error
```typescript
let bad: [string, number] = [21, "Digambar"]; // ❌ Error: order mismatch
let bad2: [string, number] = ["Digambar"];     // ❌ Error: missing element
```

### Optional tuple elements
```typescript
let point: [number, number, number?] = [10, 20]; // 3rd element optional
```

### Rest elements in tuples
```typescript
let scores: [string, ...number[]] = ["Digambar", 90, 85, 88];
```

### Named tuple members (readability, TS 4.0+)
```typescript
let coordinate: [x: number, y: number] = [10, 20];
```

### `readonly` tuple
```typescript
let rp: readonly [string, number] = ["Digambar", 21];
// rp[0] = "Rahul"; ❌ Error
```

### Tuple vs Array — key difference
| Feature          | Array               | Tuple                          |
|-------------------|----------------------|---------------------------------|
| Length            | dynamic (any size)  | fixed                          |
| Element types     | usually same type    | can differ per position         |
| Order             | doesn't matter        | matters (position = meaning)    |
| Use case          | list of similar items | structured, fixed-shape data (e.g. `[id, name]`, `useState` return) |

### Real-world example — React's `useState`
```typescript
// useState returns a tuple: [value, setter]
const [count, setCount]: [number, (n: number) => void] = useState(0);
```

### Key points
- Great for representing a **fixed record-like structure** without creating a full interface.
- Destructuring works naturally: `const [a, b] = tuple;`
- Overusing tuples for complex data hurts readability — use an `interface`/`type` object instead once you have more than 2–3 fields.

---

## 3. Object

Represents a value with **named properties**, each with its own type.

### Inline object type
```typescript
let user: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: "Digambar",
  isActive: true
};
```

### Using `type` alias
```typescript
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

let u: User = { id: 1, name: "Digambar", isActive: true };
```

### Using `interface`
```typescript
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

let u2: User = { id: 1, name: "Digambar", isActive: true };
```

### `type` vs `interface`
| Feature                | `type`                          | `interface`                     |
|--------------------------|----------------------------------|-----------------------------------|
| Extending                | via intersection `&`            | via `extends`                    |
| Declaration merging       | ❌ not allowed                   | ✅ allowed (auto-merges)          |
| Union / primitive types   | ✅ can define unions, primitives | ❌ objects/classes only           |
| Convention                | data shapes, unions, functions   | object/class contracts            |

```typescript
// type union — interface cannot do this
type ID = number | string;

// interface extends
interface Base { id: number; }
interface Extended extends Base { name: string; }

// type intersection (equivalent idea)
type ExtendedT = Base & { name: string };
```

### Optional properties
```typescript
interface User {
  id: number;
  name: string;
  email?: string; // optional
}

let u3: User = { id: 1, name: "Digambar" }; // valid, email omitted
```

### `readonly` properties
```typescript
interface User {
  readonly id: number;
  name: string;
}

let u4: User = { id: 1, name: "Digambar" };
// u4.id = 2; ❌ Error — readonly
```

### Nested objects
```typescript
interface Address {
  city: string;
  pincode: number;
}

interface User {
  id: number;
  name: string;
  address: Address;
}

let u5: User = {
  id: 1,
  name: "Digambar",
  address: { city: "Pune", pincode: 411001 }
};
```

### Index signatures (dynamic/unknown keys)
```typescript
interface Scores {
  [subject: string]: number;
}

let marks: Scores = {
  math: 90,
  science: 85
};
```

### Excess property checks
```typescript
interface User { id: number; name: string; }

let u6: User = { id: 1, name: "Digambar", age: 21 };
// ❌ Error: 'age' does not exist in type 'User' (object literal check)

let obj = { id: 1, name: "Digambar", age: 21 };
let u7: User = obj; // ✅ OK — assigned via variable, not literal (structural typing)
```

### `Record<K, V>` utility type
```typescript
let scores: Record<string, number> = {
  math: 90,
  science: 85
};
```

### Key points
- Objects are **structurally typed** — a value matches a type if it has the required shape, regardless of name.
- Prefer `interface` for object shapes that may be extended; prefer `type` for unions or when composing multiple types.
- Use `?` for optional fields, `readonly` for immutable fields.
- Index signatures allow dynamic keys when the exact property names aren't known ahead of time.

---

## 4. Quick Comparison — Array vs Tuple vs Object

| Aspect        | Array                     | Tuple                          | Object                         |
|----------------|-----------------------------|----------------------------------|----------------------------------|
| Structure      | List of same-type items     | Fixed-length, position-typed list | Named key–value pairs           |
| Length         | Variable                    | Fixed                            | Fixed set of keys                |
| Access         | By index (loop-friendly)     | By index (position = meaning)     | By property name                 |
| Best for       | Collections of similar data | Small fixed-shape records         | Structured entities/models       |
| Example        | `number[]`                  | `[string, number]`               | `{ id: number; name: string }`  |

---

## 5. Common Pitfalls

1. **Tuple type widened to array**: without an explicit annotation, `["a", 1]` infers as `(string | number)[]`, not a tuple.
   ```typescript
   let t = ["a", 1];              // inferred: (string | number)[]
   let t2: [string, number] = ["a", 1]; // correct tuple
   ```
2. **Mutating tuples with array methods**: `push()` is still allowed on tuples by default (TS doesn't fully lock length) — use `readonly` tuples to prevent this.
3. **Forgetting `?` for optional object fields** causes errors when a property isn't always present.
4. **Using `any[]`** defeats the purpose of typing — avoid unless truly necessary.
5. **Excess property check** only triggers on object literals assigned directly, not on variables passed in — don't rely on it as full validation.

---

## 6. Quick Cheat Sheet

```typescript
// Array
let a: number[] = [1, 2, 3];

// Tuple
let t: [string, number] = ["Digambar", 21];

// Object (type)
type Person = { name: string; age: number };
let p: Person = { name: "Digambar", age: 21 };

// Object (interface)
interface Person2 {
  name: string;
  age: number;
  email?: string;      // optional
  readonly id: number; // readonly
}
```