const Express = require("express");
const ProductController = require("../Controllers/ProductController")
const Router = Express.Router()


// C = Create 
Router.post("/CreateProduct", ProductController.CreateProduct)

// R = Read 
Router.get("/ReadProuct", ProductController.ReadProuct)

// U = Update 
Router.post("/UpdateProuct/:id", ProductController.UpdateProuct)

// D = Delete  
Router.post("/DeleteProuct/:id", ProductController.DeleteProuct)
 


module.exports = Router