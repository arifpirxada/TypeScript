// Enums (short for enumerations) are a special feature that allows you to define a set of named constants.

/* 
-------------------------------------------
-------------------------------------------
            Types of Enums
-------------------------------------------
------------------------------------------- 
*/

/* -------------------------------------------
1. Numeric Enums (Default)
------------------------------------------- */

// By default, TypeScript enums are numeric. Values start at 0 and increment automatically.

enum Direction {
    Up,       // 0
    Down,     // 1
    Left,     // 2
    Right     // 3
}

let move: Direction = Direction.Up;

// You can also manually assign values:
enum ManualDirection {
    Up = 1,
    Down = 2,
    Left = 4,
    Right = 8
}

/* -------------------------------------------
2. String Enums
------------------------------------------- */

// Each member is explicitly assigned a string value. They do not auto-increment.

enum StringDirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let stringMove: StringDirection = StringDirection.Left;



/* -------------------------------------------
3. Heterogeneous Enums
------------------------------------------- */

// Mix numeric and string values (not recommended unless necessary).

enum Mixed {
    No = 0,
    Yes = "YES"
}



/* 
-------------------------------------------
-------------------------------------------
            Using Enums
-------------------------------------------
------------------------------------------- 
*/

/* -------------------------------------------
1. Using Enums
------------------------------------------- */

enum Status {
    Success = 1,
    Failure = 0
}

let result = Status.Success;
console.log(result); // 1


/* -------------------------------------------
2. Reverse Mapping (only for numeric enums)
------------------------------------------- */

enum MapStatus {
    Success = 1,
    Failure = 0
}

console.log(MapStatus[1]); // "Success"


/* 
-------------------------------------------
            Const Enums
------------------------------------------- 
*/

// Use const enum for performance. They are completely removed during compilation and replaced with literal values.

const enum ConstantDirection {
    Up,
    Down
}

let dir = ConstantDirection.Up; // Compiles to: `var dir = 0;`
