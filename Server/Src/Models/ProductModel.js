const Mongoose = require("mongoose");
const DataSchema = Mongoose.Schema(
    {
        ProductName:{type:String},
        ProductCode:{type:String},
        ProductImg:{type:String},
        UnitPrice:{type:String},
        Qty:{type:String},
        TotalPrice:{type:String},
        CreateDate:{type:Date,default:Date.now()}
    },
    {versionKey:false}
)

const ProductModel = Mongoose.model("Products", DataSchema)
module.exports = ProductModel;