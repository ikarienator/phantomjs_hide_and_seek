var webpage = require('webpage');
var page = webpage.create();
console.log(page.evaluate(function () {
    return JSON.stringify(screen);
}));

console.log(page.evaluate(function () {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return JSON.stringify({w: w, h: h});
}));

console.log(page.evaluate(function () {
    return window.devicePixelRatio;
}));

phantom.exit(0);