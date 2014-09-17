var system = require('system');
var page = require('webpage').create();
var injectedJs = system.args[2] || '';

var fs = require('fs');
// console.log(fs.read('/proc/self/cwd/load.js'));

//page.settings.userAgent = 'abc';

page.onConsoleMessage = function (msg) {
    console.log(msg);
};

page.onLoadFinished = function () {
    page.evaluate(new Function(injectedJs));
};

page.open(system.args[1], function (status) {

});


