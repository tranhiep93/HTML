//truy cập đến phần tử có id là two
var itemTwo = document.getElementById('two');
//lay gia tri của đứa con đầu tiên, id two
var elText = itemTwo.firstChild.nodeValue;
//thay giá trị nội dùng bằng pine nuts
elText = elText.replace('pine nuts', 'kale');
//gán lại giá trị bằng eltext
itemTwo.firstChild.nodeValue = elText;