var express = require('express');
var router = express.Router();

//let's first include our subroutes
router.use('/api', require('./api'));

// router.use('/', require('./main'));
// router.use('/user', require('./users'));
// router.use('/kittehs', require('./catPictures'));

router.get('/survey', function(req, res, next) {
    // a generic 404 page.
    res.sendFile('survey.html', { root: './app/public/views' });
});

router.get('/', function(req, res, next) {
    // the main page
    res.sendFile('home.html', { root: './app/public/views' });
});
// router.use(function(req, res) {
//     res.status(404).end();
// });
module.exports = router;
