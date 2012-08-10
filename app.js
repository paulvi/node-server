var ex = require('./lib/index.js');
var logger = require('./lib/logger.js');

var app = ex();
app.use(ex.static(__dirname + '/public'));

require('http').createServer(app).listen(3001, function () {
    console.log('Listening on port 3001');
});

require('child_process').exec('curl "http://127.0.0.1:3001/a.js?c=1&d=2"', function (error, stdout, stderr) {
    console.log(stdout);
});