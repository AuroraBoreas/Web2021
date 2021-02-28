var btn = document.querySelector(".submit-button");
console.log(btn);

// btn.addEventListener('click', ()=>{
//     console.log("hello SCY");
// });

btn.addEventListener("click", buttonClick);

// or use regular function

function buttonClick(e){
    // let v1 = document.getElementById("item").textContent = "SCY CSN";
    // console.log(v1);
    // let v2 = document.querySelector("#item").style.backgroundColor = "black";
    // console.log(v2);

    /*

    [why blinking?]
    ----

    recall what HTML submit button does;
    post result and clear input;

    to prevent it, using e.preventDefault();

    ----



    */
   e.preventDefault();

    // coordinate
    console.log(e.clientX, e.clientY);
    console.log(e.offsetX, e.offsetY); // relative to e.target;
    // hit key
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
    // event type
    console.log("event type: " + e.type)

}


var box = document.getElementById("box");
// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);
// box.addEventListener("mousedown", runEvent);
// box.addEventListener("mouseout", runEvent);
// box.addEventListener("mouseover", runEvent);
box.addEventListener("mousemove", runEvent);
box.addEventListener("focus", runEvent);
box.addEventListener("blur", runEvent);

box.addEventListener("cut", runEvent);
box.addEventListener("paste", runEvent);

function runEvent(e){
    console.log("event type: " + e.type);
    let output = "mouseX: " + e.offsetX + "mouseY: " + e.offsetY;
    document.getElementById("text-area").innerText = output;
    document.getElementById("box").style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`;
};
