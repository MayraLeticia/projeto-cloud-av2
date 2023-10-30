const express = require("express"); //importa o mÃ³dulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Seja bem vindo!</h1>");
})

//rota do cadastro de produtos
app.get("/sobre", function(req,res){
    res.send("<h1>Sobre a gente:</h1><br><p>lorem ipsum</p>");
})

//rota com parametro 
app.get("/equipe/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("membro da equipe: " + req.params.parametro);
})

//rota com parametro opcional
app.get("/cadastro/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>Membro " + nome + " adicionado!</h1>");
    }else{
        res.send("Membro adicionado! alteração");
    }
    
})

app.listen(4000,function(erro){  // cria a aplicaÃ§Ã£o na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})
