let a = +prompt('nhập doanh số bán hàng')
if (a >= 100 && a < 200) {
    alert('bạn được thưởng' + ((a * 5)/100))
}else if (a >= 200 && a < 300) {
    alert('bạn được thưởng' + ((a * 10)/100))
} else if(a >= 300 && a < 400) {
    alert('bạn được thưởng' + ((a * 15)/100))
} else if(a >= 400 && a < 500) {
    alert('bạn được thưởng' + ((a * 20)/100))
} else if(a >= 500) {
    alert('bạn được thưởng' + ((a * 25)/100))
} else {
    alert('không được thưởng')
}