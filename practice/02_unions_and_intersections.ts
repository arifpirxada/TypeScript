/*
------------------------------
    Unions Types ( | )
------------------------------
*/

// A union type is a type formed from two or more other types, representing values that may be any one of those types.
// A union type allows a value to be one of several types. It's like saying, "this can be A or B."

function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
// printId({ myID: 22342 });

/*
------
Working with Union Types
------
*/

/*
function printMyId(id: number | string) {
    console.log(id.toUpperCase());
    Property 'toUpperCase' does not exist on type 'string | number'.
    Property 'toUpperCase' does not exist on type 'number'.
}
*/

function printMyId(id: number | string) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id);
    }
}

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}

/*
------------------------------
    Intersection Types (&)
------------------------------
*/

// An intersection type combines multiple types into one.
// A value of this type must satisfy all included types. It's like saying, "this must be A and B."

type A = { name: string };
type B = { age: number };

type Person = A & B;

const person: Person = {
    name: "Alice",
    age: 30
};

// Use case

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

type NewEmployee = Identity & BusinessPartner;

const emp: NewEmployee = {
    id: 1,
    name: "John",
    credit: 100
};
