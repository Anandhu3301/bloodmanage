//Server Database Connection
const mongoose = require("mongoose");
//Connecting Database
mongoose.connect("mongodb+srv://Anandhu:anandhu@bloodysweet.rwyyhe2.mongodb.net/")
//Schema Creation
const Schema = mongoose.Schema;
var userSchema = new  Schema({
    userfName:String,
    userlName:String,
    userGender:String,
    userAge:Number,
    userEmail:String,
    userPassword:String,
    isAdmin:Boolean
});
//4.Set up collections
UserInfo = mongoose.model("user",userSchema)
//5.Exporting
module.exports=UserInfo;
