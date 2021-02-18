/*

[source, regex]
----

* pattern
* search
* result



----

*/

text = "Non est rerum optio et et fugiat eos. Quidem perspiciatis beatae dolorem non. Ratione non voluptates voluptatem ut non.";

var p = "([a-zA-Z]{3})\s([a-zA-Z]{}3)";
var re = new RegExp(p, 'i');
re.compile();
var res = re.exec(text);
console.log(res);

// regex expr
var p2 = /o\w+/;
var res2 = p2.exec(text);
console.log(res2);
