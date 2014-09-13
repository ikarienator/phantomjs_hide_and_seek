var system = require('system');
var fs = require('fs');
var page = require('webpage').create();
var injectedJs = system.args[2] || '';

page.onConsoleMessage = function (msg) {
    console.log(msg);
};

page.onLoadFinished = function () {
    page.evaluate(new Function(injectedJs));
    phantom.exit(0);
};

page.open(system.args[1], function (status) {

});


