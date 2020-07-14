const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("/ProjetoEntrevistCadastroCliente/dist/ProjetoEntrevistCadastroCliente"));

app.get('/*', function(req, res){
    res.sendFile(path.join('/home/theblackred/Documents/Angular/ProjetoEntrevistCadastroCliente/dist/ProjetoEntrevistCadastroCliente/index.html'));
});

app.listen(process.env.PORT || 8081),function(){
    console.log("rodando na porta 8081")
}