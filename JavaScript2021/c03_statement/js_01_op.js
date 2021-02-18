/*

[source, op]
----
operators: A R L A B A C O O;

* Arithmetic;
* Relational;
* Logical;
* Assignment;
* Bitwise;
* Access;
* Cast;
* Op for storage;
* Op for other;

----

*/ 

var x = 10, y = 42;

console.log(`${x} + ${y} = ${x + y}`);
console.log(`${x} - ${y} = ${x - y}`);
console.log(`${x} * ${y} = ${x * y}`);
console.log(`${x} / ${y} = ${x / y}`);
console.log(`${x} % ${y} = ${x % y}`);
console.log(`${x++}`);  // x=11, return 10
console.log(`${--x}`);  // x=10, return 10

// inplace
console.log(`${x} += ${y}, result: ${x += y}`)


// relational
console.log()
x = 10;
console.log(`x=${x}, y=${y}`);
console.log((x == y));  // false;
console.log((x != y));  // true;
console.log((x < y));  // true;
console.log((x <= y));  // true;
console.log((x > y));  // false;
console.log((x >= y));  // false;

// logical
console.log()
console.log((x == y) && (x != y));  // false
console.log((x == y) || (x != y));  // true
console.log(!(x != y)); // false

// bitwise
console.log(x<<=2);  // 8-bit system, 0b0000 1010; -> 0b0010 1000; 40;
x = 10;
console.log(x>>2);  // 0b0000 1010 -> 0b0000 0010; 2
x = 10; y = 42;
console.log(x^y);   // 0b0000 1010 ^ 0b0010 1010; 0b0010 0000; 32
x = 10; y = 42;
console.log(x & y); // 10;
x = 10; y = 42;
console.log(x | y); // 10 1010; 42

// access
// see class Point in "JavaScript2021\c03_statement\js_01_op.js"

// chain
var a = 42 + 10 - 6 / 3;
console.log(a); // 50