function square(number){
    let result = number*number;
    return result;
}
// let squareof=square(2);
// document.write("square of 2 is:"+squareof +"<br>")
// let squareof5=square(5);
// document.write("square of 5 is:"+squareof5)
function caculate(){
    let input=document.getElementById("input").value;
    let result =square(input);
    document.getElementById("result").innerHTML= result;

}
