/*

[source, map]
----

concept is similar with map() in Python;

----

*/

var arr = [1, 2, 4, 5, 6, 7, 8, 19, 25];

var res = arr.filter(x => x%2);
console.log(res);

var res2 = res.map(x=> x * x);
console.log(res2);
