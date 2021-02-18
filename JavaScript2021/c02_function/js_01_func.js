/*

[source, function]
----

function func_name(T...Args) { //body };

keywords::

* function
* return
* yield
* new

features::

* [x] function overloading?
* [x] params?
* [*] function inside function?
* [*] lambda expr;
* [*] generator;
* [*] function ctor;  <-- not recommended

symbols::

* *(asteric)
* =>            // <-- same concept like delegate type in C#;
----

[source, ternary operator]
----

concept -> same concept in C/C++, C#;

difference  -> ternary conditions do not support return in their conditions;

----

*/ 

// regular
function add(x, y) { return (x + y); }
function factorial(n) 
{
    if(n<2) { return 1; }
    else { return n*factorial(n-1); }
}
function fibonacci(n)
{
    if(n<2) { return n; }
    else { return fibonacci(n-1) + fibonacci(n-2); }
}

var x = 3, y = 42;
console.log(x + y); // 45
console.log(factorial(3))   // 6
console.log(fibonacci(3));  // 2

// func inside func
function func(x) { console.log(x); }
function dec(func)
{
    function inner(x, y) { return (x * y); }
    
    return func(inner(3, 4));
}

dec(func);

// lambda
var f = function(x, y) { console.log(`x=${x}, y=${y}`); }
f(42, 12);

// generator

function* simpleGenerator()
{
    var i = 0;
    while(true) { yield ++i; }
}

var gen = simpleGenerator();

console.log(gen.next().value);  // 1
console.log(gen.next().value);  // 2
console.log(gen.next().value);  // 3 ...

function* simpleGenerator2(x)
{
    yield x+1;
    yield x+2;
    yield x+3;
}

function* generator(x)
{
    yield x;
    yield* simpleGenerator2(x);
    yield x + 10;
}

var g = generator(10);
console.log(g.next().value);    // 10
console.log(g.next().value);    // 11
console.log(g.next().value);    // 12
console.log(g.next().value);    // 13
console.log(g.next().value);    // 20

// function ctor
var multiply = new Function('x', 'y', 'return x * y');
console.log(multiply(3, 4)); // 12