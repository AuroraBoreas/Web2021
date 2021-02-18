/*

[source, forloop]
----

mechanism: is same with switchcase in C/C++ etc;

* for(;;)
* for( of )

----


*/ 

// for...
for(let i=0; i<5; ++i)
{
    console.log(i);
}

// for...of
var strings = Array.from("hello world! ZL numba one")
for(let s of strings)
{
    console.log(s);
}

console.log();
// for...in iterates a specified variable over all the enumerable properties of an objec
var numbers = [1, 2, 3];
for(let number in numbers)
{
    console.log(number)
}
