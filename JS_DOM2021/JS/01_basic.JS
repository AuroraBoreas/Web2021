/*

[DOM]
----

* concept: Document Object Module; Tree of HTML;

* why: using JS to "CRUD" manipulate HTML to gain control;

----

文字背景盒子
颜色显示格子
排列组合对齐


head
    meta
    link
    title
body
    header
        nav
    main
        article
        section
    footer

    script

[tags]
----
<hn>: h1...h6;
<p>: paragraph;

<div>

<br>
<hr>

<link>
<img>
<a>
<iframe>
<vid>

<form>
<input>
<textarea>

<ol>
<ul>
<dl>

<table>

<bold>
<italic>
<strong>
<font>

----

*/


/* explore DOM using JS */

console.dir(document);
// domain
console.log("Domain => ", document.domain);
// URL
console.log("URL => ", document.URL);
// title
console.log("Title => ", document.title);
// doctype
console.log("doctype => ", document.doctype);
// head, body, all
console.log("head => ", document.head);
console.log("body => ", document.body);
console.log("all => ", document.all);

// forms
console.log("forms => ", document.forms);
// links
console.log("links => ", document.links);
// imgs
console.log("images => ", document.images);


/*

[selectors]
----

+ concept is similar to Selector in CSS;

* getElementByID()
* getElementByClassName()
* getElementByTagName()
* querySelector()

----

*/

var IdName = "title";
let HeadTitle = document.getElementById(IdName);
console.log(IdName, HeadTitle);

// make some changes
// HeadTitle.innerHTML = "CSN, SCY";
// HeadTitle.innerText = "SCY, TNV";
/*

[innerHTML vs innerText]
----
* innerHTML, includes everything, contents + style;

* innerText, returns only text contents, w/o style;
----

*/
console.log(HeadTitle.innerHTML);
console.log(HeadTitle.innerText);

// insert h3 into h1
HeadTitle.innerHTML = "<h3>CYJ, NDBHS</h3>"
// style change
HeadTitle.style.borderBottom = "solid 3px red" ;

var clsName = "list-item";
let myUL = document.getElementsByClassName(clsName);
console.log(myUL[1]);
myUL[1].textContent = "SCY";
myUL[1].style.fontWeight = "bold";
myUL[1].style.backgroundColor = "yellow";


for(let i = 0; i < myUL.length; ++i)
{
    myUL[i].style.backgroundColor = "red";
}

/* querySelector() */
var qry = document.querySelector("input");    // any CSS selector :D
console.log(qry);
qry.value = "hello CYJ";

qry = document.querySelector('input[placeholder="Email"]');
console.log(qry);
qry.value = "scy@live.com";
