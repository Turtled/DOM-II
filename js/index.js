// Your code goes here
//1
let logoImg = document.getElementById("home-img");
logoImg.addEventListener("mouseenter", event => {
    event.stopPropagation();
    logoImg.setAttribute("style", "border: 2px dashed gray");
})

//2
logoImg.addEventListener("mouseleave", event => {
    event.stopPropagation();
    logoImg.setAttribute("style", "border: none");
})

//3
let count = 0;
let body = document.querySelector("body");
body.addEventListener("keypress", event => {
    if (count % 2 == 0) {
        body.setAttribute("style", "background: red");
    }
    else {
        body.setAttribute("style", "background: transparent");
    }
    count++;
})

//4
body.addEventListener("wheel", event => {
        body.setAttribute("style", "background: " + '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));//found this line for getting a random color
})

//5
document.defaultView.addEventListener("resize", event => {
    alert("Hey! Don't resize me.");
})

//6
var elems = document.body.getElementsByTagName("*");
for(let elem of elems){
    elem.addEventListener("focus", event => {
        elem.setAttribute("style", "opacity: .3");
    });
}

//7
for(let elem of elems){
    elem.addEventListener("blur", event => {
        elem.setAttribute("style", "opacity: 1");
    })
};

//8
for(let elem of elems){
    elem.addEventListener("copy", event => {
        alert("You just tried to copy \"" + document.getSelection() + "\" from the Fun Bus website, however this is not allowed.");
        event.clipboardData.setData('text/plain', "You may not copy from the Fun Bus website.");
        event.preventDefault();//prevent it from actually copying
    })
};

//9
var imgs = document.body.getElementsByTagName("img");
for(let img of imgs){
    img.addEventListener("dblclick", event => {
        img.setAttribute("style", "transform: rotate(180deg)");
    })
};

//10
var paras = document.body.getElementsByTagName("p");
for(let para of paras){
    para.addEventListener("dragend", event => {
        event.preventDefault();
        event.target.textContent += " DROPPED ";
    });
}