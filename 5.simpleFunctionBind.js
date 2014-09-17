Function.prototype.bind = function () {
    var func = this;
    var self = arguments[0];
    var rest = [].slice.call(arguments, 1);
    return function () {
        var args = [].slice.call(arguments, 0);
        return func.apply(self, rest.concat(args));
    };
};
