var newEl = document.createElement('li');

var nexText = document.createTextNode('quinoa');

newEl.appendChild(nexText);

var position = document.getElementsByTagName('ul')[0];

position.appendChild(newEl);