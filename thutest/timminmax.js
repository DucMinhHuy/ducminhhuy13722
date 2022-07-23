function check(){
    let array=[];
    let doDai=+prompt("nhap do dai");
    for(let i=0;i<doDai;i++){
        let arr=+prompt("nhap gia tri");
        array.push(arr);
        return array;
    }
}
function test(){
    let chuyen=check();
    let index=-1;
   let min=array[0];
   for(let i=0;i<array.length;i++){
       if(min<array[i]){
           min=array[i];
           index=i;
           let viTri=min+"+"+index;
           return viTri;
       }
   }
}
function display(){
    let ra=test();
    document.getElementById("result").innerHTML=ra;
}