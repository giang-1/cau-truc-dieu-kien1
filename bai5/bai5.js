// let a = +prompt('nhập điểm kiểm tra:')
// let b = +prompt('nhập điểm thi giữa kỳ :')
// let c = +prompt('nhập điểm thi cuối kỳ :')
// let d = ((a * 2) + (b * 3) + (c * 6)) / 11
// if (d >= 8 && d <= 10) {
//     alert('giỏi')
// }else if (d < 8 && d >= 6.5) {
//     alert('khá')
// }else if ( d < 6.5 && d >= 5){
//     alert('trung bình')
// }else{
//     alert('yếu')
// }
// var i = 5
// var count = 0
// for(var i = 0; i < 10;i += 2){
//     count +=i
// }
// console.log(count)
// for(i = 1; i <= 10; i++){
//     a = 5 * i
//     console.log("5x" + i + "=" + a)
// }
// let num = +prompt('nhập số: ')
// let total= 0;
// while (num != -1) {
//     num = +prompt('nhập số')
//     a = total += num
//     alert(a)
// }
let a = parseInt(prompt("nhập a: "));
let b = true;
// if (a < 2){
//     b = false
// }else{
//     for (i = 2; i < a; i++){
//         if (a % i == 0){
//             b = false
//         }
//     }
// }
// if(b == true){
//     document.write(a + 'là số nguyên tố')
// }else{
//     document.write(a + 'không phải số nguyên tố')
// }
for(i = 2; i < a; i++){
    if(a < 2 || a % i == 0){
        b = false
    }
}
if (b == true){
    document.write( a + 'là số nguyên tố')
}else{
    document.write(a + 'không phải số nguyên tố')
}


