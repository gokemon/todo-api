'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// ok, so we don't call the database, just build the model here
// the database should be configured in a config file, 
// same place the process env is set to dev or production


var TaskSchema = new Schema({
    name: {
        type: String,
        Required: 'Please enter the name of the task'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});


module.exports = mongoose.model('Tasks', TaskSchema);