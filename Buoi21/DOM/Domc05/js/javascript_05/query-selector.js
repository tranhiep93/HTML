//truy cập đến phần tử thứ nhất thẻ Li, có class là hot
//Đổi class phần tử đó sang cool
var el = document.querySelector('li.hot');
el.className = 'cool';
//Truy cập đến toàn bộ phần tử li.hot
//đổi class phần tử đầu tiên sang cool
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';