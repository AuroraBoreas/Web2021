// var
var x = 42;
let y = 3.14;
const PI = Math.PI;
// type conversion
console.log(String(x));
console.log(Number("42"));
console.log(Boolean(1));
// data types
var n = null;
var m = undefined;
var o = Symbol("x");
var p = Object();
// type traits
console.log(typeof p);
console.log(isNaN(n));
// parse
console.log(parseInt('0b00101010', 2));
console.log(parseFloat('3.14'));
// function
function f(x, y) {
    return (x + y);
}
const g = function(){
    console.log("anonymouse");
}
(function(...args){
    console.log(args.reduce((x, y)=>x+y, 0)); 
}(1, 2, 3, 4));

function* gen(n){
    yield n;
    yield n+1;
    yield n+2;
}

var g1 = gen(10);
console.log(g1.next().value);

(function* (x){
    yield x + 1;
    yield x + 2;
    yield x + 3;
}(1));

// unpacking
var a = {
    "name": "ZL",
    "age" : 35,
    "sex" : "female",
}

console.log(a.age);
// var n1, n2, n3;
var { "name": n1, "age": n2, "sex": n3 } = a;
console.log(n1);

const arr = [1, 2, 3];
[a, b, c] = arr;
console.log(a, b, c);

[a, ..._] = arr;
console.log(_);

// contains
var m1 = new Map();
m1.set(1, "ZL");
m1.set(2, "ZZ");
m1.set(3, "LL");

var m2 = new Map()
m2.set(3, "ZL");
m2.set(4, "ZZ");
m2.set(5, "LL");

// merge
var m3 = new Map([...m1, ...m2]);
console.log(m3);

// loop
m3.forEach((k, v)=> console.log(k, v));
for(let[k, v] of m3)
{
    console.log(k, v);
}

// array
var fruits = [
    'apple',
    'orange',
    'pear',
    'banana'
];

// push, pop, shift, unshift, splice, slice, indexOf, length, []; ICAMLOBP;

// set
var set1 = new Set("hello world");
set1.forEach((i)=>console.log(i));
// user defines union, symmetricDifference, intersection, difference;

// control flow
function union(setA, setB) {
    let _tmp = new Set(setA);
    for(let elem of setB)
    {
        if(!setA.has(elem))
        {
            _tmp.add(elem);
        }
    }
    return _tmp;
}

function symmetricDifference(setA, setB)
{
    let _tmp = new Set(setA);
    for(let elem of setB)
    {
        if(setA.has(elem))
        {
            _tmp.delete(elem);
        }
        else
        {
            _tmp.add(elem);
        }
    }
    return _tmp;
}

function intersection(setA, setB)
{
    let _tmp = new Set();
    for(let elem of setB)
    {
        if(setA.has(elem))
        {
            _tmp.add(elem);
        }
    }
    return _tmp;
}

function difference(setA, setB)
{
    let _tmp = new Set(setA);
    for(let elem of setB)
    {
        if(setA.has(elem))
        {
            _tmp.delete(elem);
        }
    }
    return _tmp;
}

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);

console.log(union(setA, setB)); // set(8) {1,2,3,4,5,6,7,8}
console.log(symmetricDifference(setA, setB)); // set(6) {1,2,3,6,7,8}
console.log(intersection(setA, setB));  // set(2) {4, 5}
console.log(difference(setA, setB));    // set(3) {1, 2, 3}

// trycatch
x = 42;
y = 0;

try
{
    throw("in try block");
}catch(ex)
{
    console.log(ex);
}

// ternary operator
((x)=>{
    console.log((x>10)? x: 0);
})(3);

// function prop
function hello(first, last, age, sex){
    name = {first, last};
    age = age;
    sex = sex;
    
    console.log(`hello ${name.first}`);
}

var h = new hello("Zhang", "Liang", 34, "male");

// class
class Person
{
    constructor(first, last, age, sex)
    {
        this.name = {first, last};
        this.age = age;
        this.sex = sex;
    }
    greet(){
        return `hello ${this.name.first}`;
    }
}

var per = new Person("Z", "K", 35, "male");
console.log(per.greet());

// inheritance
class Teacher extends Person
{
    constructor(first, last, age, sex, subject)
    {
        super(first, last, age, sex);
        this.subject = subject;
    }

    farewell(){
        return `${this.name.first} say bye, leaving this building...`
    }
}

var t = new Teacher("Z", "L", 34, "male", "math");
console.log(t.greet());
console.log(t.farewell());

// getter, setter
class Point
{
    #_x = 0;
    #_y = 0;
    constructor(x, y)
    {
        this.#_x = x;
        this.#_y = y;
    }

    get X() { return this.#_x; }
    get Y() { return this.#_y; }

    set X(val) { this.#_x = val; }
    set Y(val) { this.#_y = val; }
    ToString(){
        return `[${this.X}, ${this.Y}]`
    };

    add(other)
    {
        return new Point(this.X + other.X, this.Y + other.Y);
    }
    sub(other)
    {
        return new Point(this.X - other.X, this.Y - other.Y);
    }
    mul(val)
    {
        return new Point(this.X * val, this.Y * val);
    }
    k(other)
    {
        return (this.y - other.y) / (this.X - other.X);
    }
}

var po = new Point(3, 4), oo = new Point(4, 8);
console.log(po.ToString());

// regex

// random
function randomFloat()
{
    return Math.random();
}

function randomInt()
{
    return Math.floor(Math.random() * 100);
}

function randomBtwn(start=1, end=100)
{
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

for(let i=0; i<3; ++i)
{
    console.log("float " + i, randomFloat());
    console.log("int " + i, randomInt());
    console.log("btwn " + i, randomBtwn(4, 10));
}

// import
// import { fib } from "./func"
const lib = require("./func");

console.log(lib.fib(3));    // 3