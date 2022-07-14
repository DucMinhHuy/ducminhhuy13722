let A=document.getElementById("1");
function inputValue(value){
    A.value+=value;
}
function result(){
    let B=eval(A.value);
    A.value=B;
}
function xoa(){
    A.value="";
}