// function Apple(type){
//     this.kieu=type;
//     this.mau="red";
//     this.getInfo=getAppleInfo();
// }
// function getAppleInfo(){
//     return this.mau+""+this.kieu+"apple";
// }
// let apple=new Apple("macintosh");
// apple.kieu="reddish";
// alert(apple.getInfo);
 function apple(type){
    this.kieu=type;
    this.mau="red";
    this.getInfo=function (){
        return this.kieu+""+this.mau+"apple";
    };
 }
 apple.mau="reddish";
alert(apple.getInfo);