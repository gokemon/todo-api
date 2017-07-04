var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000, // this could be moved to a config file
    mongoose = require('mongoose'),
    Task = require('./models/todoModel'),
    bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo-api-db');
// this could be moved to a config file


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

var routes = require('./routes/todoRoutes');
routes(app);


app.listen(port);
console.log('todo-api server started on: ' + port);