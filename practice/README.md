# TypeScript

## 1. **Typing in TypeScript**

### ▸ Type Annotations

- `any`, `unknown`, `number`, `string`, `Date`, `boolean`, `bigint`, etc.
    

### ▸ Type Inference

- TypeScript infers types automatically when possible.
    
- [Contextual typing](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#anonymous-functions)
    

### ▸ Type Assertions

- Assert a variable’s type using `as` or `<T>`.
    

### ▸ Literal Types

- Exact values like `"on" | "off"` or `1 | 2`.
    

---

## 2. **Functions**

### ▸ Function Types

- Parameter types, return types, and call signatures.
    

### ▸ Optional & Default Parameters

- `?` for optional, `=` for defaults.
    

### ▸ Function Call Signatures in Object Types

### ▸ Function Overloading

- Multiple call signatures with one implementation.
    

### ▸ Parameter Destructuring

- Destructure objects directly in function parameters.
    

---

## 3. **Objects & Structured Types**

### ▸ Object Types

- Inline type annotations for object shapes.
    

### ▸ Type Aliases

- `type User = { name: string }`
    

### ▸ Interfaces

- `interface User { name: string }`
    

### ▸ Type Aliases vs Interfaces

- [Official comparison](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
    

---

## 4. **Advanced Types**

### ▸ Unions (`|`)

- `string | number`
    

### ▸ Intersections (`&`)

- `{ name: string } & { age: number }`
    

### ▸ Tuples

- Fixed-length arrays with specific types.
    

### ▸ Enums

- Numeric, string, `const enum`
    

---

## 5. **Generics**

### ▸ Basic Generics

- `function identity<T>(arg: T): T`
    

### ▸ Constraints

- `T extends SomeType`
    

### ▸ Multiple Type Parameters

- `<T, U>(a: T, b: U) => [T, U]`
    

### ▸ Generic Function Overloading

---

## 6. **Type Narrowing & Guards**

### ▸ Typeof Narrowing

### ▸ Truthiness Checks

### ▸ Equality Narrowing

### ▸ `in` Operator

### ▸ `instanceof` Operator

### ▸ Discriminated Unions

- Use a common `kind` field to narrow union members.
    

### ▸ Exhaustiveness Checking with `never`

---

## 7. **Modules & Namespaces**

### ▸ ES Modules

- `import` / `export`
    

### ▸ CommonJS Modules (Node.js-style)

### ▸ TypeScript Namespaces (less common)

- Useful for grouping types in global code.
    

---

## 8. **TypeScript Configuration (tsconfig.json)**

### ▸ Compiler Options

- `noEmitOnError`
    
- `target: "es2016"` → [Downleveling](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#downleveling)
    

### ▸ Strictness

- `strict`, `strictNullChecks`, etc.
    
- [Reference](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#strictness)
    

### ▸ Watch Mode

- Auto recompile on changes.
    

### ▸ File Paths

- `rootDir`, `outDir`
    
- `include`, `exclude`
    

### ▸ HTML Integration

```html
<script src="./dist/index.js" type="module"></script>
```

---