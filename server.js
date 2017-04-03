const express = require ('express');
const hbs = require('hbs');
const fs = require('fs');
const helper = require ('./helper.js');

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;
	fs.appendFile('server.log', log + '\n', (err) => {
		if (err) {
			console.log ('Unable to append to server.log')
		}
	});
	next();
});

//To turn on Maintenance
// app.use((req, res, next) => {
// 	res.render('maintenance.hbs')
// });
app.use(express.static(__dirname + '/public'));

app.get ('/', (req, res) => {
	res.render ('index.hbs', {
	copyright: 'copyrightclass',
	});
});

app.get ('/help', (req, res) => {
	res.render ('help.hbs', {
	helptext: 'This page is for help topics',
	copyright: 'copyrightclass',
	});

});

app.listen (3001);
