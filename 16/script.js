'use strict'
let elem = document.getElementById("img1");
    elem.onclick = function(){alert(22)};
let funct1 = document.getElementById("img2");
    funct1.onclick = function(){alert(89)};
let kvakva = document.getElementById("img3");
    kvakva.onclick = function(){alert("KVAAAAAAAAAA")};

let pos1 = document.getElementById("pos1");
let pos2 = document.getElementById("pos2");
let pos3 = document.getElementById("pos3");
    function mouseOver1(event) {
        event.target.setAttribute('title', event.target.innerText)
    };
    function mouseOut1(event) {
        event.target.removeAttribute('title')
    };

pos1.addEventListener('mouseover', mouseOver1);
pos1.addEventListener('mouseout', mouseOut1);

pos2.addEventListener('mouseover', mouseOver1);
pos2.addEventListener('mouseout', mouseOut1);

pos3.addEventListener('mouseover', mouseOver1);
pos3.addEventListener('mouseout', mouseOut1);

let pos4 = document.getElementById("pos4");
let pos5 = document.getElementById("pos5");
let pos6 = document.getElementById("pos6");

function mouseOver2(event1) {
    event1.target.innerText = event1.target.innerText + ' (' + event1.target.getAttribute('href') + ')'
}

function mouseOut2(event1){
    event1.target.innerText = event1.target.innerText.split(' (')[0]
}
 pos4.addEventListener('mouseover', mouseOver2)
 pos4.addEventListener('mouseout', mouseOut2)

 pos5.addEventListener('mouseover', mouseOver2)
 pos5.addEventListener('mouseout', mouseOut2)
 
 pos6.addEventListener('mouseover', mouseOver2)
 pos6.addEventListener('mouseout', mouseOut2)

let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')
let demo = document.getElementById('demo')

function blur(event2) {
    demo.innerText += event2.target.value + ' '

}

input1.addEventListener("blur", blur)
input2.addEventListener("blur", blur)
input3.addEventListener("blur", blur)

function click(event2) {
    alert(event2.target.value)
    event2.target.removeEventListener("click", click);
}

input1.addEventListener("click", click)
input2.addEventListener("click", click)
input3.addEventListener("click", click)

let paragraphs = document.getElementsByClassName('jab')

function paragraphSquare(event3){
    let num = parseInt(event3.target.textContent)
    let square = num * num
    let squareText = document.createTextNode(square)
    event3.target.innerHTML = ' '
    event3.target.appendChild(squareText)
}
for (let i=0; i < paragraphs.length; i++){
    paragraphs[i].addEventListener('click', paragraphSquare)
}

let inputs = document.getElementsByClassName('inp')

function inputBlur(event5){
    let values = event5.target.value
    let lenghts = event5.target.getAttribute('data-length')
    if (values.length == lenghts){
        event5.target.classList.remove('no');
        event5.target.classList.add('yes')
    } else {
        event5.target.classList.remove('yes');
        event5.target.classList.add('no')
    }
}
for (let i=0; i < inputs.length; i++){
    inputs[i].addEventListener('blur', inputBlur)
}

let divs = document.getElementsByClassName('div')

function paintRed(event){
    event.target.classList.add('red');
    event.target.classList.remove('green');
    event.target.removeEventListener('click', paintRed);
    event.target.addEventListener('click', paintGreen);
}
function paintGreen(event) {
    event.target.classList.add('green');
    event.target.classList.remove('red');
    event.target.removeEventListener('click', paintGreen);
    event.target.addEventListener('click', paintRed);
}

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', paintRed);
}