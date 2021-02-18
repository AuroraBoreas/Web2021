/*

[source, array]
----
concept: same concept like "list" in Python;

op: I C A M L O B P


class-level methods

* Array.from()
* Array.isArray()
* Array.of()

instance-level methods

* []
* length

* push(val)
* pop()
* shift()
* unshift()

* slice()
* spice(pos, n)
* indexOf()

* foreach

loop over

* for statement

----

*/ 

// C1
var ints = Array.from("hello world!");
ints.forEach(int => {
    console.log(int);
});


// C2
var numbers = [];
numbers.push(12);
numbers.push(14);
numbers.push(15);

// R
for(i=0; i<numbers.length; ++i)
{
    console.log(numbers[i]);
}

var fruits = [
    "ZL",
    "World",
    "Hello",
];

fruits.forEach(element => {
    console.log(element);
});

// U
numbers[2] = 16;
console.log(numbers[2]);

// D
let pos = 1;
let n = 1;
let removed = numbers.splice(pos, n);
console.log(numbers);
console.log(removed);

// copy
var copied = numbers.slice(1);
console.log(copied);

// index
var val = fruits.indexOf("Hello");
console.log(val);   // 2    