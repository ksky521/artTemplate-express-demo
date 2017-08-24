var express = require('express');
var app = express();
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.get('/fast', function (req, res) {
    var now = Date.now();
    res.render('fast.art', {
        user: {
            name: 'aui',
            tags: ['art', 'template', 'nodejs']
        }
    }, function (err, html) {
        console.log('render-end-----fast----->', Date.now() - now);
        res.end(html);
    });
});
app.get('/', function (req, res) {
    var now = Date.now();
    res.render('index.art', {
        user: {
            name: 'aui',
            tags: ['art', 'template', 'nodejs']
        }
    }, function (err, html) {
        console.log('render-end------bigfile---->', Date.now() - now);
        res.end(html);
    });
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
