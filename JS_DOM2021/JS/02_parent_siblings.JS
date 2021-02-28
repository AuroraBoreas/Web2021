var itemList = document.querySelector('.grid-item');
// parent
console.log(itemList.parentNode);
// sibling
console.log(itemList.nextSibling);
// child
console.log(itemList.childNodes);
console.log(itemList.children);

console.log(itemList.parentNode.children[2].style.backgroundColor);
// first child
console.log(itemList.parentNode.firstElementChild);
/*

firstChild is pretty awkward and useless...
it returns Text;

*/
console.log(itemList.parentNode.firstChild);
// last child
console.log(itemList.parentNode.lastElementChild);

// previous sibling
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

// create element
var newDiv = document.createElement('div');
newDiv.className = "grid-item";
newDiv.style.background = "rgb(212, 203, 99)";
newDiv.appendChild(document.createTextNode("7"));
console.log(newDiv);

/*

querySelector() works here;
getElementXXX() does NOT work here!

[difference]
----
* getElementByXXX(): Returns a HTMLCollection of the elements in the object on which the method was invoked

* querySelector(): Returns the first element that is a descendant of node that matches selectors.

----

*/
let container = document.querySelector(".grid-container");
let firstChild = document.querySelector("#item");
container.insertBefore(newDiv, firstChild);
