/*

[source, ifself]
----

mechanism: is same with if...else in C/C++ etc;

----


*/ 

var x = 10, y = 42;

if(x == y)
{
    console.log(`${x} == ${y}: ${x==y}`);
}
else if(x < y)
{
    console.log(`${x} < ${y}: ${x<y}`);
}
else if(x > y)
{
    console.log(`${x} > ${y}: ${x>y}`);
}
else
{
    console.log("unknown");
}