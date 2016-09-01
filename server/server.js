var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('../client'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});


var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening to port ", port);