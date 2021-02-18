/*

[source, function has its own props]
----

JS features

----

*/ 

let f = function() { this.a=1; this.b=2; }

let o = new f();

f.prototype.b = 3;
f.prototype.c = 4;

// inherit props
console.log(o.a);   // 1
console.log(o.b);   // 2
console.log(o.c);   // 4

// inherit methods
let o1 = {
    a: 2,
    m: function() { return this.a + 1; }
}
console.log(o1.m()); // 3

var p = Object.create(o1);
p.a = 4;
console.log(p.m()); // 5

// functions in JS always have a special propoerty named "prototype", no matter how u declare them;
function doSomething(){};
console.log(doSomething.prototype);

var doSth = function(){};
console.log(doSth.prototype)

doSth.prototype.foo = "bar";
console.log(doSth.prototype)

// instance-level
var doSthInstance = new doSth();
doSthInstance.foo = "new value";
console.log(doSthInstance);