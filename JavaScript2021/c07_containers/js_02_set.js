/*

[source, set]
----

concept: it is similar with set in C++;

----

*/ 

// C
var mySet1 = new Set();
mySet1.add(1);
mySet1.add(2);
mySet1.add(3);
mySet1.add(3);
mySet1.add(4);

const dict = {1: 'a', 2: 'b'};
mySet1.add(dict);

// length
console.log(mySet1.size);   // 5

// has
console.log(mySet1.has(3)); // true

// delete
console.log(mySet1.delete(4));


// iterate
mySet1.forEach((val) => {
    console.log(val);
});

// clear
mySet1.clear();
console.log(mySet1.size);    // 0

// var mySet1 = new Set("hello world");
var mySet2 = new Set("hello world");
console.log(mySet2.size);

// implement union, intersection, symmetricDiff, difference
function isSuperset(set, subset)
{
    for(let elem of subset)
    {
        if(!set.has(elem)){ return false; }
    }
    return true;
};

function union(setA, setB)
{
    let _union = new Set(setA);
    for(let elem of setB)
    {
        _union.add(elem);
    }
    return _union;
}

function intersection(setA, setB)
{
    let _intersection = new Set();
    for(let elem of setB)
    {
        if(setA.has(elem))
        {
            _intersection.add(elem);
        }
    }

    return _intersection;
};

function symmetricDifference(setA, setB)
{
    var _symmetricdiff = new Set(setA);
    for(let elem of setB)
    {
        if(setA.has(elem))
        {
            _symmetricdiff.delete(elem);
        }
        else
        {
            _symmetricdiff.add(elem);
        }
    }

    return _symmetricdiff;
};

function difference(setA, setB)
{
    var _diff = new Set(setA);
    for(let elem of setB)
    {
        if(setA.has(elem))
        {
            _diff.delete(elem);
        }
    }
    return _diff;
};

// application
var setA = new Set([1, 2, 3, 4]);
var setB = new Set([2, 3]);
var setC = new Set([3, 4, 5, 6]);

console.log(isSuperset(setA, setB));    // true;
console.log(intersection(setA, setC));  // Set(2){3, 4}
console.log(symmetricDifference(setA, setC));   // Set(4){1, 2, 5, 6}
console.log(difference(setA, setC));    // Set(2){1, 2}