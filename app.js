// app.js
/**
 * Module dependencies.
 */

var 	express = require('express')
	,	hbs = require('hbs')
	,	routes = require('./routes')
	,	http = require('http')
	,	path = require('path');


/*
var videosDb = dirty('videos.db');
var userDb = dirty('user.db');
*/

var app = express();

var locals = {
	author:'johb'
	// add other vars here
};

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

app.set('view engine', 'html');
app.engine('html', hbs.__express);

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.favicon(__dirname + '/public/img/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(app.router);
app.use(express.static(__dirname + '/public'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

////////////////////////////////////////
// Routing
////////////////////////////////////////
app.get('/', routes.index);
// app.get('/test', routes.test);
app.get('/video/:id', routes.video);

// test
// app.get('/dirtypost', routes.dirtypost);

/* The 404 Route (ALWAYS Keep this as the last route) */
app.use(function(req, res, next){
    res.status(404).render('404', {title: "Tyvärr, sidan finns inte"});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});