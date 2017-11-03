const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials')

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
	res.render('middle.hbs');
	next();
});

app.get('/',(req,res)=>{
	res.render('about.hbs',{"name":"rasik"});
});

app.get('/bad',(req,res)=>{
	res.send('Bad request');
});

app.listen(3001);