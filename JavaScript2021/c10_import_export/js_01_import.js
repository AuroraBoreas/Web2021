/*

[source, import]
----

concept is similar with C++, C#, Python etc;

* import
* require

+ note: import is a ES6 feature, Node.js does NOT support it yet; using require() instead;

----

*/

// import {
//     add,
//     sub,
//     Point
// } from "./functions1.js";


// require
var lib = require("./functions1")

console.log(lib.add(1, 2, 3, 4));
console.log(lib.sub(42, 31));

p = new lib.Point(42, 22);
console.log(p.ToString());

// import everything in ES6
// import * as lib from "./functions1.js";
