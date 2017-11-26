document.addEventListener('mouseup',function(event)
{
    var sel = window.getSelection().toString();
    if(sel.length) {
        console.log(sel);
    }
})
