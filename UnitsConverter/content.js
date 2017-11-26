function changeTextTo(Text) {

    let sel = window.getSelection();

    if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
    }
    document.designMode = "on";

    document.execCommand('insertText', false, `${Text}`);

    document.designMode = "off";
}

// TODO: pass unedited text to changetext function

document.addEventListener('mouseup',function(event) {

    selectedText = window.getSelection().toString().replace(/ /g,'');

    if (selectedText.length && selectedText.length < 7){
        changeTextTo('Hello');
    }

})
