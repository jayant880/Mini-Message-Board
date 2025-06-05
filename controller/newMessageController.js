const messages = require('../models/message');

function getNewMessageForm(req, res) {
    res.render('form', { title: "New Message Form" });
}

function addNewMessage(req, res) {
    const { text, user } = req.body;
    if (text && user) {
        messages.push({
            text: text,
            user: user,
            added: new Date()
        });
    }
    res.redirect('/');
}

module.exports = { addNewMessage, getNewMessageForm };