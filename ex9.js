var fNum;
var sNum;
var total;
var render;

function valueSet(){
    fNum = document.getElementById("num1");
    sNum = document.getElementById("num2");
}

function display(num){
    render = document.getElementById("total");
    render.innerHTML = "결과 : " + num;
}

function add(){
    valueSet();
    total = Number(fNum.value) + Number(sNum.value);
    display(total);
}
function minus(){
    valueSet();
    total = Number(fNum.value) - Number(sNum.value);
    display(total);
}
function multi(){
    valueSet();
    total = Number(fNum.value) * Number(sNum.value);
    display(total);
}
function divi(){
    valueSet();
    total = Number(fNum.value) / Number(sNum.value);
    display(total);
}

