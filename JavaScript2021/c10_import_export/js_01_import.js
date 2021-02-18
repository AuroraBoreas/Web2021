/*

[source, import]
----

concept is similar with C++, C#, Python etc;

* import
* require


----

*/

import {
    add,
    sub,
    Point
} from "./functions1.js";

console.log(add(1, 2, 3, 4));
console.log(sub(42, 31));

p = new Point(42, 22);
console.log(p.ToString());

// import everything

import * as lib from "./functions1.js";
