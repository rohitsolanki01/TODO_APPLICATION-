const router = require('express').Router();
const { Router } = require('express');
const Todo = require('../models/todo.mdoel');
const mongoose = require('mongoose');
const {  TodoValidations} = require("../types");


router.get("/todos" , async (req, res) => {
    const todos = await Todo.find({});
    res.json(todos);
});



router.post("/todo" ,async (req,res) => {
    const payloade = req.body;
    const presentTodo = TodoValidations.safeParse(payloade);
    if(!presentTodo.success) {
        return res.status(400).json({error : presentTodo.error});
    }

    const newTodo = new Todo({
        title : presentTodo.data.title,
        description : presentTodo.data.description,
        completed : presentTodo.data.completed || false,
    })

    await newTodo.save();
    res.status(201).json(newTodo);
})


router.put("/todo/:id" , async(req,res) => {
    const todoId = req.params.id;
    const payloade = req.body;
    const presentTodo = TodoValidations.safeParse(payloade);
    if(!presentTodo.success) {
        return res.status(400).json({error : presentTodo.error});
    }
    const updatedTodo = await Todo.findByIdAndUpdate(todoId, {
        title : presentTodo.data.title,
        description : presentTodo.data.description,
        completed : presentTodo.data.completed || false,
    }, {new : true});
    if(!updatedTodo) {
        return res.status(404).json({error : "Todo not found"});
    }
    await updatedTodo.save();
    res.status(200).json(updatedTodo);
});


router.delete("/todo/:id", async (req, res) => {
    const todoID = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(todoID)) {
        return res.status(400).json({ error: "Invalid todo ID" });
    }

    const deletedTodo = await Todo.findByIdAndDelete(todoID);
    if (!deletedTodo) {
        return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
});






module.exports = router;