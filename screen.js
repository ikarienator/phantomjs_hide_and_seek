var webpage = require('webpage');
var page = webpage.create();
console.log(page.evaluate(function () {
    return JSON.stringify(screen);
}));
phantom.exit(0);