#!/usr/bin/node

var me = {};

var i = 1;

var msg = ['name', 'email', 'QQ', 'mobile'];

console.log(msg[0] + ':' );

process.stdin.on('data', function(data){
  var cmd = 'me.' + msg[i-1] + '=' +data.slice(0,data.length-1) + "";
  1
  eval(cmd)
})

