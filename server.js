//Dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 5500;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static(path.join(__dirname, 'app/public')));

//ROUTER
var routeBase = require('./app/routing')
// require('./app/routing/api-routes.js')(app); 
// require('./app/routing/html-routes.js')(app);
app.use('/',routeBase)

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});

//ALWAYS (no really!) have error-catching middleware! Notice this is AFTER your 'use routes' stuff above, so this'll get called if and only if nothing else matches

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.sendFile('404.html', { root: './app/public/views' })
});
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log('Client (probly) err:', err)
    res.send('Error!' + err)
});