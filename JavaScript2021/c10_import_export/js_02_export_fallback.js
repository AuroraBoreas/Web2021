/*

[source, export fallback]
----

* usage: create an export fallback with export default;

----

*/

// ES6 feature import does NOT work in Node.js
// import { Division } from "./functions2.js";

// require
let lib = require('./functions2')
console.log(lib.div(12, 3));
