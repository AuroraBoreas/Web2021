/*

[source, destructuring assignment]
----

concept is similar with std::tie() in C++; or unpack in Python;

note: just like *_ in Python unpacking;
JS is using ..._;


----
*/

const arr = {
    1: 'a',
    2: 'b',
    3: 'c',
}

var {1: x, 2: y, 3: z} = arr;
console.log(x, y, z);

// also works on nested objects;

// arr

const arr2 = [1, 2, 3, 4, 5, 6];
var [x, y, ..._] = arr2;
console.log(x, y);
console.log(_);

// swap
var a = 8, b = 42;
[a, b] = [b, a];
console.log(a, b);  // 42, 8

// as args passed to function
const stats = {
    min: 1,
    max: 51,
    mean: 24,
    median: 22,
    mode: 23,
    std: 19,
}

const sum1 = (function(){
    return function add(stats)
    {
        return (stats.min + stats.max);
    }
})();

console.log(sum1(stats));    // 52

// much more beautiful and concise;
const sum2 = (function(){
    return function add({min, max})
    {
        return (min + max);
    }
})();

console.log(sum2(stats));    // 52


