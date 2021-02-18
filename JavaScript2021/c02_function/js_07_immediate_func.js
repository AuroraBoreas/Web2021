/*

[source, immediate function]
----
simple idea: instead of defining a function, then call it later;
u call it immediately by adding symbol () after function definition;

it works on regular or anonymouse or lambda functions in JS;


note: in C++, C#, Python, regular function may not work like JS;
---

*/

// regular
(function mul(x, y){
    console.log(x * y);
}(3, 4));   // 12

// anonymouse
(function () {
    console.log("hello ZL");
}());

// lambda
((x, y) => {
    console.log(x + y);
})(3, 4)
