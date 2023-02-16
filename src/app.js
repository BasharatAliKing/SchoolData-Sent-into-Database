const express=require("express");
const path=require("path");
const app=express();
require("../src/db/db");
const Student=require("../src/models/stud");

const port =process.env.PORT || 4000;

// app.get("/student", (req,res)=>{
//     res.send("Hello from the Other Side..");
// });

const staticPath=path.join(__dirname,"../public");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(staticPath));
app.set("view engine", "hbs");

app.get("/student", (req,res)=>{
    res.render("index");
})

app.post("/student" , async(req,res)=>{
   try{
  const studentData=new Student({
     name:req.body.name,
     fname:req.body.fname,
     class:req.body.class,
     rollno:req.body.rollno,
     pnumber:req.body.pnumber,
     address:req.body.address,
     email:req.body.address,
     gender:req.body.gender
  });
  const data=await studentData.save();
  res.status(200).render("submit");

   }catch(err){
    res.status(400).send(err);
   }
})



app.listen(port, ()=>{
    console.log(`Listening from the port no ${port}`);   
});

