const colors = {
    // "#ebedf0" : "#ebedf0",
    "#c6e48b" : "#1EFF00",  // l1
    "#7bc96f" : "#0070ff",  // l2
    "#239a3b" : "#a335ee",  // l3
    "#196127" : "#ff8000"   // l4
};

for (let key in colors) {
    // rect blocks in contributions
    $(`rect[fill='${key}']`).attr("fill",colors[key]);

    // li blocks under contributions
    $(`li[style='background-color: ${key}']`)
    .attr("style",`background-color: ${colors[key]}`);
}
