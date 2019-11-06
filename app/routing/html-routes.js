//Dependencies
var path = require('path');

//ROUTING

module.exports = function(app){
  //default GET route that leads to survey
  app.get('/survey', function (req, res) {
     console.log(req);
     res.sendFile(path.join(__dirname, '../public/survey.html'))
  });

  //a USE route to home page
  app.use(function (req, res) {
    console.log(req);
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};

