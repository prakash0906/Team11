// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port  	 = process.env.PORT || 8080; 				// set the port
var database = require('./config/database'); 			// load the database config
var cors = require('cors');

var morgan = require('morgan'); 		// log requests to the console (express4)
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var path = require('path');
app.use(cors());
var fs = require('fs');
/*
app.use(bodyParser.urlencoded({
    extended: true
}));
*/
// configuration ===============================================================
//mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io

//app.use(express.static(__dirname + '/public')); 				// set the static files location /public/img will be /img for users
/*app.use(morgan('dev')); 										// log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ======================================================================
require('./app/routes.js')(app);
*/
// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);

app.get('/api', function(req, res) {
	console.log(__dirname + '/index.html');
//   res.json("test");
  res.send("404 resource not found");
});

app.post('/api/signin', function(req, res) {
	
	console.log(req.param('test'));
		console.log(req.param);
	 /*var user_id = req.param('id');
  var token = req.param('long');
  var geo = req.param('lat');
  */
  var user_id = req.param('test');
/*	
var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;
	*/
var json= {auth:true
,user_id:req.param.toString()
	};
	var data1 = [];//fs.readFileSync('test.txt');
//console.log("Synchronous read: " + data.toString());
/*
console.log("Program Ended");
	fs.readFileSync('test.txt', 'utf8', function(err, data) {
  if (err) {
	  console.log('err');
	  throw err;}
  console.log('OK: ' + 'test.txt');
  console.log(data);
  data1.push(data);
});*/

var fileData =fs.readFileSync('test.txt').toString().split('\n');

if(fileData.length>0){
res.json(fileData);	
}else{
	res.json("no data");	
}
   
});





