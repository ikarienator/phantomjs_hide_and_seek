var page = require('webpage').create();
page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.onInitialized = function() {
  page.evaluate(function() {
    (function () {
      var html = document.querySelectorAll('html');
      var oldQSA = document.querySelectorAll;
      Document.prototype.querySelectorAll = 
      Element.prototype.querySelectorAll = function () {
        var err;
        try {
         null[0]
        } catch(e) {
         err = e;
        }
        if (MyIndexOf(err.stack, 'phantomjs') > -1) {
         return html;
        } else {
         return oldQSA.apply(this, arguments);
        }
      };
    })();
  });
};
page.content = '<html><body>Hello<a>link</a></body></html>';
page.evaluate(function() {
  console.log(document.querySelectorAll('a')[0]);
});
phantom.exit();
