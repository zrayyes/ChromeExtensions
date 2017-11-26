function changeTextTo(Text) {

    let sel = window.getSelection();

    if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
    }
    document.designMode = "on";

    document.execCommand('insertText', false, `${Text}`);

    document.designMode = "off";
}

let number = /^[0-9]+/i;

document.addEventListener('mouseup',function(event) {

    let selectedText = window.getSelection().toString().replace(/ /g,'');

    if (selectedText.length){
        let n = selectedText.match(number);

        if (n.length){
            let x  = ((n*9)/5)+32;
            changeTextTo(x);
        }
    }
})
