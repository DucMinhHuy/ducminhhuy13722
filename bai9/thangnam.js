let a =+prompt("thang");
let value =(a==1)? 1:(a==2)?2:(a==3)?3:(a==4)?4:(a==5)?5:(a==6)?6:(a==7)?7:(a==8)?8:(a==9)?9:(a==10)?10:(a==11)?11:12;
switch (value){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("co 31 ngay");
        break;
    case 2:
        alert("co 28 or 29 ngay");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("co 30 ngay");
        break;
    default:
        alert("khong xac dinh")
}
