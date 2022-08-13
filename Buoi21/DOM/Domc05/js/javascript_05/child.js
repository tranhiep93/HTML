//truy cập đến phần tử có tag ul đầu tiên
var startItem = document.getElementsByTagName('ul');
//truy cập phần tử con đầu tiên
var firstItem = startItem.firstChild;
//truy cập phần tử con thứ 2
var lastItem = startItem.lastChild;

firstItem.className = 'complete';
lastItem.className = 'cool';