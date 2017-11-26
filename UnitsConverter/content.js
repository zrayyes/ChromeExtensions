function changeTextTo(Text) {
    sel = window.getSelection();
    selectedText = sel.toString()
    selectedText = selectedText.replace(/ /g,'');

    if (selectedText.length){
        if (sel.rangeCount && sel.getRangeAt) {
            range = sel.getRangeAt(0);
        }
        document.designMode = "on";

        document.execCommand('insertText', false, ` ${Text} `);

        document.designMode = "off";
    }
}

document.addEventListener('mouseup',function(event) {
    changeTextTo('Hello');
})
