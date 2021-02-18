/*

[source, trycatch]
----

concept: it is similar with C++;

----

*/ 


var x = 42, y = 0;
var res;

try {
    res = x / y; 
} catch (error) {
    console.log(error);
}

console.log(res);
