var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:3080
app.get('/', function(req, res) {
    console.log(req.url);
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/brand_values.csv',function(req,res){
    console.log(req.url);
    res.sendFile(path.join(__dirname + '/brand_values.csv'));
});

app.listen(3001);