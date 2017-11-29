var express = require('express')
//https://medium.com/netscape/mean-app-tutorial-with-angular-4-part-1-18691663ea96
var router = express.Router()

// Getting the Todo Controller that we just created

var ToDoController = require('../../controllers/todos.controller');


// Map each API to the Controller Functions

router.get('/', ToDoController.getTodos)

router.post('/', ToDoController.createTodo)

router.put('/', ToDoController.updateTodo)

router.delete('/:id',ToDoController.removeTodo)


// Export the Router

module.exports = router;