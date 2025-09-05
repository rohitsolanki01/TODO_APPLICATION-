const express = require("express");
const app = express();
const cors = require("cors");
const Todo =require("./models/todo.mdoel");
const todoRoutes = require("./routes/todo.routes");

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(cors());

app.use("/api", todoRoutes);


app.get("/" , (req, res) => {
    res.send("Initial API endpoint to check if the server is running");
});


app.listen(8080 , () => {
    console.log("Server is running on port 8080");
})