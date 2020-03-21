process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var https = require('https');
var fs = require('fs');
var express = require('./config/express');
var app = express();
const PORT = process.env.PORT || 8100
// https.createServer({
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.cert')
//   }, app)
//   .listen(6020, function () {
//     console.log('Example app listening on port 3000! Go to https://localhost:6020/')
//   })
https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app).listen(process.env.PORT,function(){
    console.log('Start Server At port ${PORT}')
})
// app.listen(6020);
module.exports = app;

// console.log('Server running at http://localhost:6020');

