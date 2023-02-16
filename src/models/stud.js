const mongoose=require("mongoose");

   // Schema
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    fname:{
        type:String,
        required:true,
        trim:true
    },
    class:{
        type:String,
        required:true,
        trim:true,
        touppercase:true
    },
    rollno:{
        type:Number,
        required:true,
        trim:true,
        unique:true
    },
    pnumber:{
        type:Number,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    gender:{
        type:String,
        required:true,
        trim:true
    }

});

  // Model

  const Student=new mongoose.model("Student",studentSchema);

  module.exports=Student;