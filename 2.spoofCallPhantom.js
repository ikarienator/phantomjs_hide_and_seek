page.onInitialized = function () {
    page.evaluate(function () {
        var p = window.callPhantom;
        delete window._phantom;
        delete window.callPhantom;
        Object.defineProperty(window, "myCallPhantom", {
            get: function () {
                return p;
            },
            set: function () {
            }, enumerable: false});
        setTimeout(function () {
            window.myCallPhantom();
        }, 1000);
    });
};

page.onCallback = function (obj) {
    console.log('profit!');
};