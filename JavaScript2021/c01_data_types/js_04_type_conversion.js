/*

[source, type conversion]
----

TODO:

* identify types    -> typeof(); just like type traits in C/C++; or Type in C#;
* type conversion   -> String(), Number(), Boolean(),

----

*/ 

var n = 42;
console.log(typeof n);  // Number
n = String(n);
console.log(typeof n);  // String
n = Number(n);
console.log(typeof n);  // Number

var b = true;
console.log(typeof b);  // Boolean
b = String(b);
console.log(typeof b);  // String
b = Number(b);          
console.log(b);         // NaN