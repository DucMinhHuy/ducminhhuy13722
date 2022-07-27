function soNguyenTo(){
    let i;
    for( i=2;i<100;i++){
        let count=0;
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j==0){
                count++;
                break;
            }
        }
        if(count==0){
            document.write(i+"<br>");

        }
    }
    return i;
}
let so=soNguyenTo();
document.getElementById("result").innerHTML="so nguyen to trong khoang:"+so;
