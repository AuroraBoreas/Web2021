/*

[source, object]
----

syntax: var obj = { ... };

usage:

* using {} to create a dictionary-like object;

----

*/

var obj1 = {
    "name": "ZL",
    "age" : 35,
    "sex" : "male",
    "GF"  : ["ll", "MM", "NN"],
    greeting: function(name){ console.log("hello " + name ); }
};

var dict1 = {};
dict1['ll'] = 1;
dict1['mm'] = 2;
dict1['nn'] = 3;

obj1.greeting("ZL");
console.log(dict1['ll']);

// object.hasOwnProperty()
if(obj1.hasOwnProperty("sex"))
{
    console.log(obj1["sex"]);
}
else
{
    console.log("not found");
}
