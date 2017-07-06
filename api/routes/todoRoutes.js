'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/todoController');


    // todoList Routes
    app.route('/tasks')
        .get(todoList.read_all_tasks)
        .post(todoList.create_a_task);


    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
};
// this is a very simple routes file. 
// nicely organized