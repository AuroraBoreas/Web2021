/*

* symbol    -> in a JS runtime environment, a symbol value is created by invoking the function Symbol;
            -> returns an anonymouse, unique value;
            -> usage: as a object property;

            -> seems like uuid in Python; or GUID in C#;

*/ 

const sym1 = Symbol("Sym");
const sym2 = Symbol("Sym");

console.log(sym1); // error out: Symbol type can NOT be converted into string automatically;
console.log(sym2.toString());   // but manually conversion is OK;
console.log(`${sym1==sym2}`);