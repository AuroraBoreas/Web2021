/*

[source, primitive types]
----
* undefined -> no declaration but use or define; 
* null      -> nullptr in C++, or None in Python, or null in C# etc;

* string    -> a series of characters(ascii, unicode etc);
* int       -> integer;

* decimal   -> float, double, long double etc; decimal in C# etc;

* boolean   -> true or false;

* object    -> user-defined type;
----


[source, declare variables]
----

using keywords to declare variables

* "var"     -> everything
* "let"     -> one-time usage, disposable;
* "const"   -> same concept in C/C++, C# etc;
----

[source, namespace or scope]
----
same concept in C/C++; C# etc;

* local
* gloabl
* enclosure
* builtin
----

*/ 

// undefined
// console.log(x); // error out

// null
x = null;
console.log(x); // null
// int
var a = 42;
console.log(a); // 42

// string
a = "hello ZL";
console.log(a); // hello ZL

// decimal
var b = 3.14;
console.log(b);  // 3.14

// boolean
var c1 = true; 
var c2 = false;
console.log(c1); // true
console.log(c2); // true

// object
class Point
{
    // ctor
    constructor(x, y)
    {
        this._x = x;
        this._y = y;
    }

    // getter
    get x() { return this._x; }
    get y() { return this._y; }
    // setter
    set x(val) { this._x = val; }
    set y(val) { this._y = val; }
    // repr, ToString
    toString() { return  `[${this._x},${this._y}]`; }
    // add
    add(other)
    {
        return new Point(this._x + other._x, this._y + other._y);
    }
    
}

var p1 = new Point(3, 4);
var p2 = new Point(4, 5);
console.log(p1.toString());
console.log(p2.toString());
p1.x = 4;

var p3 = p1.add(p2);
console.log(p3.toString());