let A=null;
A=document.getElementById("huy");
function init(){
    A=document.getElementById("huy");
    A.style.position="relative";
    A.style.left="0px";
}
function moveRight(){
    A.style.left=parseInt(A.style.left)+10+"px";
}
window.onload=init;

