/*

[source, parseInt]
----

* parseInt(string, base);
* parseFloat(string);

----

*/

var a = '24';
console.log(parseInt(a, 10));   // 24
console.log(parseInt(a, 8));    // 20
console.log(parseInt(a, 16));   // 36

// float
var b = 3.14;
console.log(parseFloat(b)); // 3.14
