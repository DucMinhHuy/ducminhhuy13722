let i=0;
let count =0;
let result="";
while(count<15){
    if (i%3==0){
        result+=i+"<br>";
        count++;
    }i++;
}document.write(result);