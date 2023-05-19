var http=require('http');
var url=require('url');
var os=require('os');

http.createServer(function (req,res){
    var q = url.parse(req.url, true);
    var info = q.pathname;
    if (info == "/info"){
        res.writeHead(200, {'Content-Type':'text/html'});
        let informacoes = "SO:" + os.platform() + "<br>"
        + "CPU: " + os.arch() + "<br>"
        + "Mem: " + os.freemem() + "<br>"
        + "Uptime: " + os.uptime() + "<br>"
        + "Carga: " + os.loadavg() + "<br>"
        + "Usuário: " + os.userInfo().username + "<br>"
        + "Pasta Incial: " + os.userInfo().homedir + "<br>"
        ;
        console.log(os.userInfo() );
        res.write(informacoes);
        res.end();
    } else{
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<h1> Sem informacoes </h1>");
        res.end();
    };
}) .listen(8080);
console.log("Início...");