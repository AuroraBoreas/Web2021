/*

[source, reference as args]
----

* val as arg
* ref as arg
* ptr as arg    <-- N/A in JS;


array and object are passed as reference by default;

----

*/

class Point
{
    #_x;
    #_y;

    constructor(x, y)
    {
        this.#_x = x;
        this.#_y = y;
    }

    get X() { return this.#_x; }
    get Y() { return this.#_y; }

    set X(val) { this.#_x = val; }
    set Y(val) { this.#_y = val; }

    ToString()
    { return (`[${this.X}, ${this.Y}]`); }

    Add(other)
    { return new Point(this.X + other.X, this.Y + other.Y); }
    Sub(other)
    { return new Point(this.X - other.X, this.Y - other.Y); }
    Sub(val)
    { return new Point(this.X * val, this.Y * val); }
}

function f(obj, arr, number)
{
    console.log("\nobj: ");
    obj.X = 15; obj.Y = 42;
    console.log("changed obj.X, obj.Y in function scope!");

    console.log("\narr: ");
    for(let i in arr)
    {
        arr[i]++;
    }

    console.log("increased elements in arra by 1!");

    console.log("\nnumber: ");
    number++;
    console.log("increased number by one!");
}

let p = new Point(4, 5);
let a = [1, 2, 3, 4];
let n = 3;


f(p, a, n);

console.log(p.ToString());  // [15, 42];
console.log(a);             // [2, 3, 4, 5];
console.log(n);             // 3;



