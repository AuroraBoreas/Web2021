/*

[source, class]
----

keyword::

* class
* extends   -> inheritance
* prototype -> static and prototype props MUST be defined outside of classBody definition;
               and props MUST be prefixed with staticXXX or prototypeXXX; 

symbols::

* property  -> public (by default);
* #property -> private;

constraints::

* static     -> class-level method; Not allowed to be called at instance-level;

----

*/


class Point
{
    // fields
    #_x;
    #_y;
    
    // ctor
    constructor(x, y)
    { this.#_x = x; this.#_y = y; }

    // getter
    get X() { return this.#_x; }
    get Y() { return this.#_y; }
    // setter
    set X(val) { this.#_x = val; }
    set Y(val) { this.#_y = val; }

    // repr
    ToString()
    { return (`[${this.X},${this.Y}]`); }

    Add(other)
    { return new Point(this.X + other.X, this.Y + other.Y); }

    Sub(other)
    { return new Point(this.X - other.X, this.Y - other.Y); }

}

// static
Point.staticNumber = Math.PI;
Point.prototype.prototypeWord = "hello world";

// prototype

var p1 = new Point(3, 4), 
    p2 = new Point(5, 6),
    p3 = p1.Add(p2);

p2.X = 10;  // aha, interestring..
console.log(p3.ToString());

// access prototype props;
console.log(p1.prototypeWord);