const ProductModel = require("../Models/ProductModel");



// C = Create 
exports.CreateProduct = (Req, Res)=>{
    let ReqBody =  Req.body;;
    ProductModel.create(ReqBody,(Error, Data)=>{
        if(Error){
            Res.status(400).json({status:"Fail", Data:Error})
        }
        else{
            Res.status(200).json({status:"Success", Data:Data})
        }
    })

}


// R = Read 
exports.ReadProuct = (Req, Res) => {
    
    let Query = {}
    let Projection = "ProductName ProductCode ProductImg UnitPrice Qty TotalPrice" // ProductModel এর বিতরের তথ্য অনুযায়ি

    ProductModel.find(Query, Projection, (Error, Data)=>{
        
        if(Error){
            Res.status(400).json({status:"Fail", Data:Error})
        }
        else{
            Res.status(200).json({status:"Success", Data:Data})
        }
    })
}



// U = Update 
exports.UpdateProuct = (Req, Res) => {
    
    let Id =  Req.params.id;
    let Query = {_id: Id};
    let RquestBody = Req.body;

    ProductModel.updateOne(Query, RquestBody,(Error, Data)=>{
        if(Error){
            Res.status(400).json({status:"Fail", Data:Error})
        }
        else{
            Res.status(200).json({status:"Success", Data:Data})
        }
    })

}


// D = Delete 
exports.DeleteProuct = (Req, Res) => {
    
    let Id =  Req.params.id;
    let Query = {_id: Id};

    ProductModel.remove(Query,(Error, Data)=>{
        if(Error){
            Res.status(400).json({status:"Fail", Data:Error})
        }
        else{
            Res.status(200).json({status:"Success", Data:Data})
        }
    })

}