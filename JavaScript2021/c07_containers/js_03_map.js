/*

[source, map]
----

concept: it is similar with Map<> in C++; 

----


*/ 

// C1
var dict = {};
console.log(typeof dict);
dict[1] = 3.14;
console.log(dict[1]);

// C2
var m = new Map();
m.set('a', 1);
m.set('b', 2);
m.set('c', 3);

// length
console.log(m.size);    // 3
// access
console.log(m.get('a'));    // 1
// update
m.set('a', 42);
console.log(m.get('a'));    // 42
// delete
m.delete('a');
console.log(m.has('a'));    // false
// iterate pairs
for(let[k, v] of m)
{
    console.log(`${k} : ${v}`);
}
// iterate keys
for(let key of m.keys())
{
    console.log(key);
}
// iterate values
for(let val of m.values())
{
    console.log(val);
}
// foreach
m.forEach((k,v) => {
    console.log(`${k}, ${v}`);
})

// merge
var m2 = new Map();
m2.set('x', 3.14);
m2.set('y', 2.71);
m2.set('z', 1.12);

var merged = new Map([...m, ...m2]);
merged.forEach((k, v)=>{
    console.log(k, v);
});

// copy
var m3 = new Map(merged);
for(let[k, v] of m3)
{
    console.log(`${k} : ${v}`);
}

// clear
m3.clear();
console.log(m3.size);

// ordered? sorted?
