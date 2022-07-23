let length=+prompt("enter vao do dai mang");
let array = new Array(length);
for(let i=0;i<array.length;i++) {
        let value = +prompt("enter vao gia tri" + (i + 1));
        array[i] = value
        document.write(value);
    }
array.reverse(array);
document.write("<br>")
document.write(array);

// let array=[2,3,4,5,6];
// array.reverse();
// console.log(array);