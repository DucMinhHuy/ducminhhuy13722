let n=0;
let i =0;
let result="";
while(i<15){
    if (n%3==0){
        result+=n+"<br>";
        i++;
    }n++;
}document.write(result);