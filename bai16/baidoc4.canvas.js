// let c=document.getElementById("myCanvas");
// let ctx=c.getContext("2d");
// ctx.moveTo(0,0);
// ctx.lineTo(200,150);
// ctx.stroke();

// let c=document.getElementById("myCanvas");
// let ctx=c.getContext("2d");
// ctx.beginPath();
// ctx.arc(80,60,60,0,2*Math.PI);
// ctx.stroke();
//
// let c=document.getElementById("myCanvas");
// let ctx=c.getContext("2d");
// ctx.font="20px Arial";
// ctx.fillText("hello world",40,80)
//
// let c=document.getElementById("myCanvas");
// let ctx=c.getContext("2d");
// ctx.font="30px Arial";
// ctx.strokeText("hello world",40,80);

let c=document.getElementById("myCanvas");
let ctx= c.getContext("2d");
let grd=ctx.createLinearGradient(10,50,10,60);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
ctx.fillStyle=grd;
ctx.fillRect(10,10,150,90);