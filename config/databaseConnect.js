
const mongoose = require('mongoose');

//using .connect method to connect mongoDB to our server 


function dbConnect() {

    mongoose.connect('mongodb://localhost:27017/toDoData', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("Database has been connected!")
        })

        .catch((error) => {
            console.error(error.message)
            process.exit(1);
        })

}


// exporting function

module.exports = dbConnect;