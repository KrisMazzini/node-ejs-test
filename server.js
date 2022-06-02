const express = require('express');
const app = express(); // Instanciando o express

app.set("view engine", "ejs") // Seta o ejs como ferramenta de renderização do HTML

app.get("/", function (req, res) { // Criação de uma rota
    const qualities = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        },
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML usando JavaScript"
    res.render("pages/index", {
        qualities,
        subtitle
    }); // a resposta é a renderização do index (não é necessário colocar .ejs pois já foi informado)
});

app.get("/sobre", function (req, res) { // Criação de outra rota, chamada sobre
    res.render("pages/about");
});

app.listen(8081) // Roda o servidor na nossa máquina na porta 8080
console.log('Rodando')