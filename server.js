const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("/home/theblackred/Documents/Angular/ProjetoEntrevistCadastroCliente/dist/ProjetoEntrevistCadastroCliente"));

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/home/theblackred/Documents/Angular/ProjetoEntrevistCadastroCliente/dist/ProjetoEntrevistCadastroCliente/index.html'));
});

app.listen(process.env.PORT || 8081),function(){
    console.log("rodando na porta 8081")
}