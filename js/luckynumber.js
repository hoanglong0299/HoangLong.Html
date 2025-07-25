var x = (Math.random())*100;
x= parseInt(x);
console.log(x);

let a = prompt("Vui lòng nhập số dự đoán:");
let b = prompt("Vui lòng nhập số tiền:");


if (a ==x){
    alert("Xin chúc mừng bạn.Bạn đã trúng thưởng số tiền:"+b*70)

}else{
    alert("Chúc may mắn lần sau!");
}