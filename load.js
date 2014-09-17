var system = require('system');
var fs = require('fs');
var page = require('webpage').create();
var spoofer = system.args[2] || '';

//page.settings.userAgent = 'abc';

page.onConsoleMessage = function (msg) {
    console.log(msg);
};

if (spoofer) {
    eval(fs.read(spoofer));
}

page.open(system.args[1], function (status) {

});


