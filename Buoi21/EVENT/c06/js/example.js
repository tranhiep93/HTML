var noteInput, noteName, textEntered, target;
noteName = document.getElementById('noteName');
noteInput = document.getElementById('noteInput');

function  writeLabel (e){
    if (!e){
        e = window.event;
    }
    target = e.target || e.srcElement;
    textEntered = target.value;
    noteName.textContent = textEntered;
}
