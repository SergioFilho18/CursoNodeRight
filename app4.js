const express = require('express'); // importa o express
const app = express(); // declara o express

app.set('view engine', 'ejs'); // configurar a view engine
app.set('views', './views'); // mostrar onde estão as views


app.listen(3000, function(){;
    console.log("Servidor Rodando"); // exibir no terminal que o servidor está rodando

}) //método com a porta 3000(porta que o servidor libera pra você) que na verdade é uma função

app.get('/', function(req, res){ // linkando em localhost:3000/

    res.send('Página Home'); // enviando mensangem da Página Home

})

app.get('/usuario', function(req, res){ //linkando em localhost:3000/usuario
    
    res.send('quem somos'); // enviando a mensangem do usuario

})

app.get('/sobre', function(req, res){ //linkando em localhost:3000/sobre
    
    res.send('sobre'); // enviando a mensangem do sobre

})

app.get('/', function(req, res){ // linkando em localhost:3000/

    res.render('aula4'); // enviando mensangem da Página Home

})
