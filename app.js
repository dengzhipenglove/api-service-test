
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   //res.send('Hello World');
   res.redirect('login');
})
 
app.get('/login',function(req,res){
    res.sendFile(__dirname + '/static/html/login.html');
})
app.get('/login.css',function(req,res){
    res.sendFile(__dirname + '/static/css/login.css');
})
app.post('/test',function(req,res){
    //res.end("hello")
    res.redirect("imghtml")
})
app.get('/imghtml',function(req,res){
    //res.end("hello")
    res.sendFile(__dirname + '/static/html/img.html');
})

app.get('/imgtest',function(req,res){
    res.sendFile(__dirname + '/static/img/timg.jpg');
})


var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("api-serice['Address']=http://%s:%s", host, port)

})