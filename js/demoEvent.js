
//* Sự kiện liên quan đến chuột html
// onclick: nhấn vào chức năng | onmouseenter: hover vào nút| onmouseleave: thoát khỏi nút
function f1(){
    alert("Function 1");
}

function f2(){
    alert("Function 2");
}

function f3(){
    alert("Function 3");
}

//* Sự kiện liên quan đến bàn phím html
// onkeypress: ấn = hiện | onkeydown:ấn nút xuống trên bàn phím| onkeyup: ấn nút lên

var ip= document.getElementById("ip");
var ts = document.getElementById("text-search");
var ts2 = document.getElementById("text-search2");
function key1(){
    alert("Function k1");
}
function key2(){
    alert("Function k2");
    var v = ip.value;
    ts2.innerText = v;
}
function key3(){
    alert("Function k3");
    var v = ip.value;
    ts.innerText = v;
}
function key4(){
    alert("function k4");
}
