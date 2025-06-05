const messages = require("../models/message");

function getIndex(req, res) {
    res.render('index', { title: "Mini-Message-Board", messages: messages });
}

module.exports = { getIndex };