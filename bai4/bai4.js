let a = +prompt('nhập a')
let b = +prompt('nhập b')
let c = +prompt('nhập c')
// if (a > b) {
//     if (a > c){
//         alert('a là số lớn nhất')
//     } else {
//         alert('c là số lớn nhất')
//     }
// }else if (b > c) {
//     alert('b là số lớn nhất')
// }else{
//     alert('c là số lớn nhất')
// }
// if ( a > b && a > c ) {
//     alert('a là số lớn nhất')
// }else if (b > a && b > c) {
//     alert('b là số lớn nhất')
// }else {
//     alert('c là số lớn nhất')
// }
let max_num;
if ( a > b && a > c ) {
    max_num = a
    }else if (b > a && b > c) {
        max_num = b
    }else {
        max_num = c
    }
    alert(`${max_num} là số lớn nhất`)