//importing the schema model
const todo = require("../models/todoSchema");

//we are rewuired to write a route handler as this contoller is mapped to a route and that mapping needs to do the following task so we need to write a route handler -- take it like eventListener calls a handlerFunction 

async function createToDo(req, res) {

    try {
        //we will get the keys that we need to fetch from the request body
        const { title, description } = req.body;
        //create new todo object and insert in db
        //.create used to create an object
        const response = await todo.create({ title, description })
        //send an json response 

        res.status(200).json({
            success: true,
            data: response,
            message: "Data Entry Done"
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: error.message,
        })
    }

}

module.exports = createToDo;
