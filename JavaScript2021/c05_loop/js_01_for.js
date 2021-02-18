/*

[source, forloop]
----

mechanism: is same with switchcase in C/C++ etc;

* for(;;)
* for( of )

----


*/ 

for(let i=0; i<5; ++i)
{
    console.log(i);
}

var strings = Array.from("hello world! ZL numba one")
for(let s of strings)
{
    console.log(s);
}