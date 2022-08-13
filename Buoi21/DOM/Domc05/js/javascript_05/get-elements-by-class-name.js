//lấy ra tập hợp phần tử có class là hot
var elements = document.getElementsByClassName('hot');
//nếu số phần tử lớn hơn 2, truy cập đến phần tử có index là 2 (phần tử thứ 3)
//Thay đổi class phần tử đó thành cool
if (elements.length >2){
    var el = elements[2];
    el.className = 'cool';
}