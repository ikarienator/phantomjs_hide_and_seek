page.onInitialized = function () {
    page.evaluate(function () {
        var oldNavigator = navigator;
        var oldPlugins = oldNavigator.plugins;
        var plugins = {};
        plugins.length = 1;
        plugins.__proto__ = oldPlugins.__proto__;

        window.navigator = {plugins: plugins};
        window.navigator.__proto__ = oldNavigator.__proto__;
    });
};