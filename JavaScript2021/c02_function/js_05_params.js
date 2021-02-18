/*

[source, params]
----

* params using ...args;

* note: diff from C# delegate, but alike lamda function in Python;
body should not be enclosed with {};

----


*/

const sum = (function(){
    return function sum(...args){
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 3));

const f = (x, y) => x * y;
console.log(f(3, 4));
