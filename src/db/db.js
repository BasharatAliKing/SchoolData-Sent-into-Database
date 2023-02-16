const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/StudentData",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("Connection Successful!!")})
   .catch((er)=>{console.log(er)});