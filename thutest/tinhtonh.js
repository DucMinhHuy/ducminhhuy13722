function check(){
    let array=[];
      let doDai =document.getElementById("demo" ).value;
    for(let i=0;i<doDai;i++){
        let arr=document.getElementById("nhap").value;
        array.push(arr);
    }
    let sum=0;
    for(let j=0;j<array.length;j++){
        sum+=array[j];
        return sum;
    }
}
function display(){
    let tong=check();
    document.getElementById("result").innerHTML=":"+tong;
}