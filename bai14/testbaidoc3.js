// function  sum(a,b,c){
//     let sum = a+b+c;
//     return sum;}
// function getSum(){
//     let a=+prompt("nhap");
//     let b=+prompt("nhap");
//     let c=+prompt("nhap");
//     let sum1 = sum(a,b,c);
//     alert(sum1)
// }
const PI=3.14;
function getArea(r){
    let area=PI*r**2;
    return area;
}
function showArea(){
    let r=+document.getElementById("r").value;
    let area=getArea(r);
    document.getElementById("result").innerText=area;
}