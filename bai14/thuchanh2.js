function doi(){
    let f = +document.getElementById("feet").value;
    c=(f-32)/1.8;
    document.getElementById("result").innerHTML= "Celcius: " +c;
}