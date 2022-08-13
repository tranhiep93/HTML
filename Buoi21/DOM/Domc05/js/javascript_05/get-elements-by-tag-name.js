//lấy ra phần tử có thẻ tag tên li
var elements = document.getElementsByTagName('li');
//Nếu số lượng phần tử lớn hơn 0
//truy cập đến phần tử có índex là 0, (phần tử thứ nhất).
//đổi class phần tử đó sang cool
if (elements.length >0){
    var el = elements [0];
    el.className = 'cool';
}