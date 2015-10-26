
// node server -  to start the app

var express = require('express');
var app = express();

/*
app.get('/', function(req, res){
    res.send('Hello from server.js');
});
*/

app.use(express.static(__dirname + "/app"));


app.listen(3000);

console.log("Server is running on port 3000");