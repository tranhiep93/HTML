//truy cập đến phần tử có id là two
var startItem = document.getElementById('two');
//tạo phần từ trước id two
var prevItem = startItem.previousSibling;
//tạo phần tử sau id two
var nextItem = startItem.nextSibling;

//đổi class phần tử trước id thành complete
prevItem.className = 'complete';
//đổi class phần tử sau thành cool
nextItem.className = 'cool';