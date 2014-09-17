page.onInitialized = function () {
    page.evaluate(function () {
        function indexOfArray(a, b) {
            var la = a.length;
            for (var i = 0; i < la; i++) {
                if (a[i] === b) {
                    return i;
                }
            }
            return -1;
        }

        var bound = [];
        var oldCall = Function.prototype.call;
        var oldApply = Function.prototype.apply;
        var slice = [].slice;
        var concat = [].concat;
        oldCall.call = oldCall;
        oldCall.apply = oldApply;
        oldApply.call = oldCall;
        oldApply.apply = oldApply;

        function call() {
            return oldCall.apply(this, arguments);
        }

        Function.prototype.call = call;

        function apply() {
            return oldApply.apply(this, arguments);
        }

        Function.prototype.apply = apply;

        function bind() {
            var func = this;
            var self = arguments[0];
            var rest = oldCall.call(slice.call, slice, arguments, 1);
            rest.concat = concat;
            var result = (function () {
                var args = oldCall.call(slice.call, slice, arguments, 0);
                return func.apply(self, rest.concat(args));
            });
            bound.push(result);
            return result;
        }

        Function.prototype.bind = bind;

        var nativeFunctionString = Error.toString().replace(/Error/g, "bind");
        var nativeToStringFunctionString = Error.toString().replace(/Error/g, "toString");
        var nativeBoundFunctionString = Error.toString().replace(/Error/g, "");
        var nativeCallFunctionString = Error.toString().replace(/Error/g, "call");
        var nativeApplyFunctionString = Error.toString().replace(/Error/g, "apply");
        var oldToString = Function.prototype.toString;

        function functionToString() {
            if (this === bind) {
                return nativeFunctionString;
            }
            if (this === functionToString) {
                return nativeToStringFunctionString;
            }
            if (this === call) {
                return nativeCallFunctionString;
            }
            if (this === apply) {
                return nativeApplyFunctionString;
            }
            var idx = indexOfArray(bound, this);
            if (idx >= 0) {
                return nativeBoundFunctionString;
            }
            return oldCall.call(oldToString, this);
        }

        Function.prototype.toString = functionToString;
    });
};