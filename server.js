//importing express using require function 
const express = require('express');
const app = express(); // storing express imported in the app function 

//middleware to send the req body to DB 

app.use(express.json());

//import routes

const todoRoutes = require("../To-Do App/routes/todoRoute")
app.use("/api/v1", todoRoutes);

//making app listen on a port 

app.listen(3000, () => {
    console.log("Server has started on port 3000")
})

//connecting db

const dbConnect = require("./config/databaseConnect")

//default route
app.get("/", (req, res) => {
    res.send("Hello Ji")
})

dbConnect();