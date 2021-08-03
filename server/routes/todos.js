const router = require('express').Router();
const Todo = require('../models/Todo');

//create single todo: 
router.post(('/add'), async (req, res) => {

    const todo = new Todo ({

        text: req.body.text,
        completed: req.body.completed

    });

    try {
        const savedTodo = await todo.save();
        res.send({ todo: todo._id});

    } catch (err) {
        res.status(400).send(err);

    }

});


//get all todos: 
router.get(('/all'), async (req, res) => {

    try {
        const todos = await Todo.find();
        res.json(todos);

    } catch (error) {
        res.status(400).send(err);
        
    }

});


//complete todo: 
router.patch(('/complete/:id'), async (req, res) => {

    const id = req.params.id
    const updates = req.body;
    const options = {new: true};

    await Todo.findByIdAndUpdate(id, updates, options, function(err, response){

        if(err){
            res.status(400).send(err);
        } else {
            res.send(response);
        }

    });
      
});

//delete todo: 
router.delete(('/delete/:id'), async (req, res) => {

    const id = req.params.id;

    await Todo.findByIdAndDelete(id, function(err, response){

        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).send(response);

        }

    });

});


module.exports = router