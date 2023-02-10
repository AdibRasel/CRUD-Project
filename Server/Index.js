const App = require("./App.js");

const dotenv = require("dotenv");

dotenv.config({path:"./Config.env"})

App.listen(process.env.RUNNING_PORT, ()=>{
    console.log("My Server Run Success, Porth Address http://localhost:5000/api/v1")
})

