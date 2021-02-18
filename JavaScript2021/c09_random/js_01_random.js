/*

[source, random]
----

* Math.random();

----

*/

// float btwn [0, 1)
function randomFloat()
{ return Math.random(); }

for(let i=0; i<3; ++i)
{
    var f = randomFloat();
    console.log(f);
}

console.log();
// random int
function randomInt()
{ return Math.floor(Math.random() * 100); }

for(let i=0; i<3; ++i)
{
    var f = randomInt();
    console.log(f);
}

console.log();
// random between
function randomBtwn(start=0, end=10)
{ return Math.floor(Math.random()*(end - start + 1)) + start; }
for(let i=0; i<3; ++i)
{
    var f = randomBtwn(2, 20);
    console.log(f);
}
