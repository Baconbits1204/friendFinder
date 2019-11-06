const express = require('express');
const router = express.Router();

//let's first include our subroutes
router.use('/api', require('./api'));

// router.use('/', require('./main'));
// router.use('/user', require('./users'));
// router.use('/kittehs', require('./catPictures'));

router.get('/survey', function(req, res, next) {
    // a generic 404 page.
    res.sendFile('survey.html', { root: './app/public/views' });
});

router.get('/404', function(req, res, next) {
    // a generic 404 page.
    res.sendFile('404.html', { root: './app/public/views' });
});
router.get('*', function(req, res, next) {
    // the main page
    res.sendFile('index.html', { root: './app/public/views' });
});
router.use(function(req, res) {
    res.status(404).end();
});
module.exports = router;
