const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const indexRouter = require('./routes/indexRoutes');
const newRouter = require('./routes/newMessageRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', indexRouter);
app.use('/new', newRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});