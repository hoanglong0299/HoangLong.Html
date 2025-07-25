// không quan tâm kiểu dữ liệu
// number , string , boolean, null, array, function -các biến và kiểu dữ liệu
var x = 10;
x = "t2505e";

var a =10;
var b = "20";
var c = "abcd"

console.log(a+a);
console.log(a+b);
console.log(b+c);


//điều kiện rẽ nhánh
if (a > 5){
console.log("A");
}else if(a>=10){
    console.log("B");
}else if (a>15){
    console.log("C");
}else{
    console.log("D");
}

// vòng lặp
for(var i =0; i <10;i++){
    console.log("i"=+i);
}

//mảng array
var arr=[];
//arr[0] = 9;
//arr[5] = 12;
//arr[2] = 184;

arr.push(9);
arr.push(12);
arr.push(184);
arr.push("hello");
arr.push (true);

//duyệt mảng
for(var i =0; i <arr.length ; i++){
    console.log(ar[i]);
}

//duyệt mảng 2 --map

arr.map(e=>{
    console.log(e);
});

arr.map((e,i)=>{
    console.log(e);
})

// sắp xếp lại mảng
arr.sort();

// tìm kiếm
if (arr.includes(9)){

}

//chuyển từ chuỗi -> số,viết hàm sẽ chủ yếu dùng const
var pi= "3.1456";
pi= parseFloat(pi);
pi= parseInt(pi);

function tinh_tong(a,b){
    var c =a+b;
    return c;
}
tinh_tong(5,3);

const phep_tru = function(a,b){
    var c= a-b;
    return c;
}
phep_tru(9,5);

const phep_nhan = (a,b)=>{
    var c = a*b;
    return c;
    console.log(c);
}
phep_nhan(7,3);

//một số hàm hay dùn
alert("Bạn chưa đủ 18 tuổi.");//return void
confirm("Cam đoan trên 18t.")//return boolean
if(confirm("Cam đoan trên 18t.")){
    var s = prompt("vui lòng nhập tên");//return string
    var t = prompt("Nhấp số tuổi");
    alert("xin chào"+s)
}else{
    alert("Vui lòng thoát khỏi trang");
}

//
var r = Math.random();//return number -> double/float 0 ->1
r=r*100;
r= parseInt(r);