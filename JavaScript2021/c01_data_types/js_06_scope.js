/*

[source, variable declaration keywords]
----

* var -> global;

* let -> anchoring with the scope that var is declared;

* const -> anchoring with the scope that var is declared;

----

*/ 


function checkScope_var()
{
    var x = "function scope";
    if(true)
    {
        x = "block scope";
        console.log(x);
    }
    console.log(x);
}

function checkScope_let()
{
    let x = "function scope";
    if(true)
    {
        let x = "block scope";
        console.log(x);
    }
    console.log(x);
}
function checkScope_const()
{
    const x = "function scope";
    if(true)
    {
        // x = "block scope";  // not OK;
        const x = "block scope"; // OK
        console.log(x);
    }
    console.log(x);
}

checkScope_var();
checkScope_let();
checkScope_const();