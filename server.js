var express = require('express');
const server = express();
var routes = require('./routes/routes');

server.use(routes);

server.listen(5000,function check(error){
    if(error)
    console.log("Error");
    else
    console.log("Started");
});