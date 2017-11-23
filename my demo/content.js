const colors = {
    "#ebedf0" : "#ebedf0",
    "#c6e48b" : "#1EFF00",
    "#7bc96f" : "#0070ff",
    "#239a3b" : "#a335ee",
    "#196127" : "#ff8000"
};

const wow_colors = [
    "#ebedf0",
    "#1EFF00",
    "#0070ff",
    "#a335ee",
    "#ff8000"
];

for (let key in colors) {
    $(`rect[fill='${key}']`).attr("fill",colors[key]);
}
