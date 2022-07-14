let test=+prompt("nhap");
let testI=+prompt("nhap");
let testII=+prompt("nhap");
let H= test+testI+testII;
var value =(H>24)?"1":(H>15)?"2":"3";
switch (value){
    case "1":
        alert("A");
        break;
    case "2":
        alert("B");
        break;
    case"3":
        alert("C");
}
