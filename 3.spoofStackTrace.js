page.onInitialized = function () {
    page.evaluate(function () {
        // here goes some stupid attempt to spoof 
        // Error object thrown by JS engine
    });
};
page.onLoadFinished = function () {
    page.evaluate(function () {
        var divs = document.querySelectorAll('div');
        // querySelectorAll is spoofed, there are 8 divs on the page
        if (divs.length != 8) {
            console.log("PhantomJS environment detected.");
        } else {
            console.log("PhantomJS environment not detected.");
        }

    });
};