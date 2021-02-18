/*

[source, string]
----

concept: same concept like string class in C++; string type in C# etc;
* string is an array of characters;
-> string in JS is iterable;


methods

* []
* length
* concat
* interpolation

* toUpperCase
* toLowerCase
* replace
* title
* join

...

----


*/ 

var s1 = "hello world";

// subscript or index, []
console.log(s1[0]); // h

// length
console.log(s1.length); // 11

// uppercase or lowercase;
console.log(s1.toUpperCase());

// replace
console.log(s1.replace('o', 'A'));

// join, which is similar ",".join(seq) in Python;
var strs = ["hello", "world"];
var s2 = strs.join();
console.log(s2);
