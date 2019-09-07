#!/usr/bin/node

console.log("hello world");

http.createServer(function(req,res){
  res.end("hello world");
}).listen(8080);
