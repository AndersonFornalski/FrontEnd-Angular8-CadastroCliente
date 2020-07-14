const express = require("express");
const PORT = process.env.PORT || 4202;

const app = express();

app.use(express.static(__dirname + "/dist/ProjetoEntrevistCadastroCliente"));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/dist/ProjetoEntrevistCadastroCliente/index.html');
});

app.listen(PORT,()=>{
    console.log("Rodando servidor na porta 4202")
})

///home/theblackred/Documents/Angular/ProjetoEntrevistCadastroCliente