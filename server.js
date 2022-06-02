const express = require('express');
const app = express(); // Instanciando o express

app.set("view engine", "ejs") // Seta o ejs como ferramenta de renderização do HTML

app.get("/", function (req, res) { // Criação de uma rota
res.render("index"); // a resposta é a renderização do index (não é necessário colocar .ejs pois já foi informado)
});

app.get("/sobre", function (req, res) { // Criação de outra rota, chamada sobre
    res.render("about");
});

app.listen(8080) // Roda o servidor na nossa máquina na porta 8080
console.log('Rodando')