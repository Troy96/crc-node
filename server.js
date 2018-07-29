const express = require('express');

const expressHbs = require('express-handlebars');

const hbs = require('hbs');

const fs =  require('fs');

const port = process.env.PORT || 3000;

const {MongoClient}  = require('mongodb');

var app =  express();

app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));

hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine','.hbs');

app.use(express.static(__dirname+'/public'));

/*

app.get('/afterSubmit', (req,res) => {
	var myText = req.query.myText; //mytext is the name of your input box
    res.render('display.hbs',{
    	name: myText
    })
});*/

const compression = require('compression');

app.use(compression());

app.get('/',(req,res) => {
	
	var myObj = JSON.parse(fs.readFileSync('utils/home-description.json'));
	res.render('index.hbs',{
		pageTitle:'Welcome to Invertis CRC',
		firstDiv: myObj.first,
		secondDiv: myObj.second,
		thirdDiv: myObj.third,
		fourthDiv : myObj.fourth
	});
});

app.get('/Records', (req,res) => {
	MongoClient.connect('mongodb://localhost:27017/invertis', (err, client) => {
	if(err) {
		return console.log('Unable to connect to MongoDB Server');
	}
		
		console.log('Connected to MongoDB Server');
		var year = req.query.opt;
		
		const db = client.db('invertis');
		db.collection('Records').find({batch:year}).toArray().then((docs) => {
			console.log(docs);
			res.render('records.hbs',{users:docs})
		}, (err) => {
			console.log('Unable to fetch',err);
		})
	
	
});
});

app.get('/Recruiters', (req,res) => {
	var names = JSON.parse(fs.readFileSync('utils/image-names.json'));
	res.render('recruiters.hbs',{
		pageTitle:'Our Recruiters',
		images: names
	});
});

app.get('/Team', (req,res) => {
	var members = JSON.parse(fs.readFileSync('utils/team-members.json'));
	res.render('team.hbs',{
		pageTitle:'Meet the Team',
		details: members
	});
});

app.get('/Test',(req,res) => {

	res.render('test.hbs',{
		
	});
});




app.listen(port,() => {
	console.log(`Server listening on ${port}...`);
});