/*

[source, switchcase]
----

mechanism: is same with switchcase in C/C++ etc;

----


*/ 

var a = 42;

switch (a) {
    case a < 10:
        console.log("a < 10");
        break;
    case a >= 10 && a< 20:
        console.log("a >= 10 && a< 20:");
        break;
    case a >= 20 && a< 30:
        console.log("a >= 20 && a< 30");
        break;
    case a >= 30 && a< 40:
        console.log("a >= 30 && a< 40");
        break;
    default:
        console.log("unknown");
        break;
}