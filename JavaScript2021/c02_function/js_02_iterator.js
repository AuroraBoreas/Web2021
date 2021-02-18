/*

[source, iterable]
----
concept: just like IEnumerable<>, IEnumerator in C#;

syntax: implement [symbol.iterator]

----

*/

function makeIterator(start=0, end=Infinity, step=1)
{
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next: function(){
            let result;
            if(nextIndex<end)
            {
                result = {value: nextIndex, done: false};
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return {value: iterationCount, done: true};
        }
    };

    return rangeIterator;
}

const it = makeIterator(1, 10, 2);

let result = it.next();
while(!result.done)
{
    console.log(result.value);
    result = it.next();
}


// using generator

function* iter(start=0, end=Infinity, step=1)
{
    let current = 0;
    for(let i=start; i<end; i+=step)
    {
        current++;
        yield i;
    }
    return current;
}

var g = iter(14, Infinity, 4);
let i = 0;
while(i<5)
{
    console.log(g.next().value); 
    i++;
}

// or

const myIter = {
    *[Symbol.iterator]()
    {
        yield 1;
        yield 2;
        yield 3;
    }
}

for(let elem of myIter)
{
    console.log(elem);
}

// or
console.log([...myIter]);