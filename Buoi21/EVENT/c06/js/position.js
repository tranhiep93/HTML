var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var xy = document.getElementById('cy');

function showPosition(event){
    sx.value = event.screenX;
    sy.value = event.screenY;
    px.value = event.screenX;
    py.value = event.screenY;
    cx.value = event.screenX;
    xy.value = event.screenY;
}
var el = document.getElementById('body');
el.addEventListener('mousemove', showPosition, false);