let a = +prompt('nhập điểm kiểm tra:')
let b = +prompt('nhập điểm thi giữa kỳ :')
let c = +prompt('nhập điểm thi cuối kỳ :')
let d = ((a * 2) + (b * 3) + (c * 6)) / 11
if (d >= 8 && d <= 10) {
    alert('giỏi')
}else if (d < 8 && d >= 6.5) {
    alert('khá')
}else if ( d < 6.5 && d >= 5){
    alert('trung bình')
}else{
    alert('yếu')
}