//Dependencies:
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5500;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static(path.join(__dirname, 'app/public')));

//ROUTER
const routeBase = require('./app/routing')
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
    next(err);
});
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log('Client (probly) err:', err)
    res.send('Error!' + err)
});