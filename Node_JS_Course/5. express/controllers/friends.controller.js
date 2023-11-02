const model = require("../models/friends.model");

function postFiend(req, res) {

    if (!req.body.name) { // client not sends what we expected
        return res.status(400).json({
            error: 'Missing friend name',
        }); // Bad request (the sever could not understand the request)
    }

    const newFriend = {
        name: req.body.name,
        id: model.length,
    };

    model.push(newFriend);

    res.json(newFriend); // if successful added to model returned newFriend
}

function getFiends(req, res) {
    res.json(model);
}

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];

    console.log("current model: " + JSON.stringify(model));
    console.log("current friend: " + friend);


    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: 'Friend not found'
        });
    }
}

module.exports = {
    postFiend,
    getFriend,
    getFiends
}