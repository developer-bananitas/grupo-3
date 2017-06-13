var nodestatic = require('node-static'),
    port = 1030,
    http = require ('http');

var file = new nodestatic.Server('./public',{
    cache:3600,
    gzip:true
});

http.createServer(function(request,response){
    request.addListener('end',function(){
        file.serve(request,response);
    }).resume();
}).listen(port);

var livereaload=require('livereload');
var server = livereaload.createServer({
    exts:['html','css','js']
});

server.watch(__dirname+"/public");

console.log("Servidor corriendo puerto" + port);
