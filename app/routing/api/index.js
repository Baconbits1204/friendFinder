const express = require('express');
const router = express.Router();

router.get('/api/friends', function(req, res) {
    console.log('getting all frendz')
    res.json(listOfFriends);
});

router.post('/api/friends', function(req, res) {
	console.log('oboy a new frend!')
    //grabs the new friend's scores to compare with friends in listOfFriends array
    var friendTally = req.body.scores;
    var tallyArray = [];
    var idealMatch = 0;

    //runs through all current friends in list
    for (var i = 0; i < listOfFriends.length; i++) {
        var tallyDiff = 0;
        //run through scores to compare friends
        for (var j = 0; j < friendTally.length; j++) {
            tallyDiff += (Math.abs(parseInt(listOfFriends[i].scores[j]) - parseInt(friendTally[j])));
        }

        //push results into tallyArray
        tallyArray.push(tallyDiff);
    }

    //after all friends are compared, find ideal match
    for (var i = 0; i < tallyArray.length; i++) {
        if (tallyArray[i] <= tallyArray[idealMatch]) {
            idealMatch = i;
        }
    }

    //return idealMatch data
    var bff = listOfFriends[idealMatch];
    res.json(bff);

    //pushes new submission into the friendsList array
    listOfFriends.push(req.body);
});
module.exports = router;