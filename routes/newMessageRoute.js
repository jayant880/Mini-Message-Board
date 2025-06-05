const { Router } = require("express");
const { addNewMessage, getNewMessageForm } = require('../controller/newMessageController');

const newRouter = Router();

newRouter.get('/', getNewMessageForm);
newRouter.post('/', addNewMessage);

module.exports = newRouter;