const colors = {
    // "#ebedf0" : "#ebedf0",
    "#c6e48b" : "#1EFF00",  // l1
    "#7bc96f" : "#0070ff",  // l2
    "#239a3b" : "#a335ee",  // l3
    "#196127" : "#ff8000"   // l4
};

for (let key in colors){
    let arr = document.querySelectorAll(`rect[fill='${key}']`);
    document.querySelector(`li[style='background-color: ${key}']`)
    .setAttribute("style",`background-color: ${colors[key]}`);
    for (var div of arr) {
        div.setAttribute("fill",colors[key]);
    };
}
