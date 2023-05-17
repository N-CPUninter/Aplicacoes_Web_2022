var http = require ('http');
var arq=require('fs');

var nomearq= process.argv[2];

if (nomearq=='' || nomearq==null)
    console.log("\nFaltou o nome do arquivo html!");
else {
    http.createServer(function(req,res){
        arq.readFile(nomearq, function (err,data){

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }).listen(5555);

    console.log('Servidor Node escutando a port[5555]');
}
