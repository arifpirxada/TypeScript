function getFirstElement<Type>(arr: Type[]) {
    return arr[0];
}

let numArr = [7, 3, 8, 9];
let stringArr = ["first", "generics", "test"];

let firstElement = getFirstElement<number>(numArr);

let firstStr = getFirstElement<string>(stringArr);

// Multiple
function pair<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}

let idWithName = pair<number, string>(1, "Arif");

// Generics with Constraints

function logLength<T extends { length: number }>(value: T): number {
    return value.length;
}

type Dimensions = {
    length: number, // This is required because of extends
    width: number;
    height: number
}

let myObj = {
    length: 20,
    width: 40,
    height: 50
}

let myLength = logLength<Dimensions>(myObj);


// Generics with Interfaces and Classes

interface Box<T> {
    value: T;
}

const stringBox: Box<string> = { value: "hello" };

// Default Generic Types

type ApiResponse<T = any> = {
    data: T; // T defaults to any if not provided.
    success: boolean;
};

//  Generic Constraints with keyof - Ensures the key exists on object T.

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const student = { name: "Alice", age: 15 };

const studentName = getProperty(student, "name"); // ✅ OK, inferred as string
const studentAge = getProperty(student, "age");   // ✅ OK, inferred as number

// ❌ Error: Property does not exist on type
// const invalid = getProperty(person, "height");



