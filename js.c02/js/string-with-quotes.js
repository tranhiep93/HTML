//create variables to hold the title and note text.
var title;
var message;

//assign values to these variabls.
title = "Molly's Special offers";
message = '<a href=\"sale.html\">25% off!</a>';

var elTitle = document.getElementById( 'title');
eltitle.textContent = title;

var elNote = document.getElementById( 'note');
elNote.innerHTML = message;