//Server Database Connection
const mongoose = require("mongoose");
//Connecting Database
mongoose.connect("mongodb+srv://Anandhu:anandhu@bloodysweet.rwyyhe2.mongodb.net/")
//Schema Creation
const Schema = mongoose.Schema;
var requestSchema = new  Schema({
    requestName:String,
    requestAge:Number,
    requestEmail:String,
    requestPhone:Number,
    requestBlood:String,
    requestAilment:String,
    requestUnit:Number
});
//4.Set up collections
mongoose.model("request",requestSchema)
//5.Exporting
module.exports=RequestInfo;
