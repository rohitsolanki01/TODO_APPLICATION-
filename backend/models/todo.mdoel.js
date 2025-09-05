const mongoose = require('mongoose');




async function connectDb() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test-todo-app")
}

connectDb().then( () => {
    console.log("Connected to MongoDB");
}).catch( (err) => {
    console.log("Error connecting to MongoDB" , err);
});

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,

    },
    description : {
        type : String,
        required : true,
    },
    completed : {
        type : Boolean,
        default : false,
    }
})


const Todo = mongoose.model("Todo" , todoSchema);

module.exports = Todo;