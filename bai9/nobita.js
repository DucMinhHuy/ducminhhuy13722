function H() {
    let A = document.getElementById("nobita");
    A.style.top = parseInt(A.style.top) - 5 + 'px';
}
function U() {
    let A = document.getElementById("nobita");
 A.style.top = parseInt(A.style.top) + 5 + 'px';
}
function Y() {
    let A = document.getElementById("nobita");
    A.style.left = parseInt(A.style.left) - 5 + 'px';
}
function M() {
    let A = document.getElementById("nobita");
    A.style.left = parseInt(A.style.left) + 5 + 'px';

}
function I(evt) {
    switch (evt.keyCode) {
        case 37:
            Y();
            break;
        case 39:
            M();
            break;
        case 38:
            H();
            break;
        case 40:
            U();
            break;
    }
}
