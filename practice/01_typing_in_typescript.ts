// Type annotations are used to explicitly specify the type of a variable, function, parameter, or return value.
// You can annotate variables with a specific type using a colon : followed by the type.

// 1. Variables
let world: string = "Hello World!";

console.log(`Hello ${world}!`);

const num1: number = 3;
const num2: number = 7;

// 2. Functions
const add = (a: number, b: number): number => {
    return a + b;
}

console.log("Add result: " + add(num1, num2));

// 3. Objects
// We will discuss interface later
interface Student {
    name: string;
    group: string;
}

const students: Array<Student> = [
    {
        name: "Arif Pirxada",
        group: "Blue"
    },
    {
        name: "Vabhav",
        group: "Yellow"
    },
    {
        name: "test",
        group: "Test Group"
    }
]


console.log("\nList of students:");
students.forEach((student: Student) => {
    console.log(`Name: ${student.name}; group: ${student.group}`);
})

// Or you can also use Type Aliases
// You can either use , or ; for separation. ? for optional

type Employee = {
    id: number;
    name: string;
    department?: string // ? means optional
}

const employee1: Employee = {
    id: 1,
    name: "employee 1"
}


// 4. Arrays

let numbers: number[] = [1, 2, 3];


/* ---------------------------------------------
Type inference:

Keep in mind, we don’t always have to write explicit type annotations.
In many cases, TypeScript can even just infer (or “figure out”) the types for us even if we omit them.
--------------------------------------------- */

/* ---------------------------------------------
Types in Typescript:

Primitive: string, number (no int or float), and boolean

Arrays: number[] or Array<number>

- Any
- Promise<number>
- null & undefined
- bigint
- symbol
--------------------------------------------- */

/* ---------------------------------------------
Type Assertions
--------------------------------------------- */

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// Or
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

/* ---------------------------------------------
Literal Types
--------------------------------------------- */

let hello: "hello" = "hello"

// hello = "no hello" // This will not work

const nextHello = "nextHello";

// nextHello = "that" // This also will not work

let direction: "up" | "down" | "left" | "right";

direction = "up";     // ✅ OK
direction = "left";   // ✅ OK
// direction = "forward"; // ❌ Error: Type '"forward"' is not assignable

// 📌 Use Case in Functions

function setMode(mode: "auto" | "manual") {
    // Only accepts "auto" or "manual"
}

setMode("auto");   // ✅
// setMode("custom"); // ❌
