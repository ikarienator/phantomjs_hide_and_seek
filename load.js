var system = require('system');
var page = require('webpage').create();
var injectedJs = system.args[2] || '';

//page.settings.userAgent = 'abc';

page.onConsoleMessage = function (msg) {
    console.log(msg);
};

page.onLoadFinished = function () {
    page.evaluate(new Function(injectedJs));
    phantom.exit(0);
};

page.open(system.args[1], function (status) {

});


