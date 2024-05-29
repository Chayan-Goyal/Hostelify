const express=require("express")
const app=express()

const cors=require('cors')

const {Pool}=require("pg")
const path =require("path")
const pool =new Pool({
user:'postgres',
host:'localhost',
database:'sample',
password:'chayanchayan',
port:5432
})



app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>
{
    // RTCRtpSender(path.join (__dirname, '..', 'client','src',  'main.jsx'));

    res.sendFile(path.join(__dirname, '..', 'client','src',  'main.jsx'));
})
app.get("/book",(req,res)=>
{
    pool.query("SELECT * FROM book;",(err,data)=>
{
    if(err)
    {
        console.log(err)
    }
    else{
        res.json(data.rows)

    }
})
})
app.post("/book",(req,res)=>
{
    console.log(req.body)
const{reg_no,name,email,gender,room}=req.body
pool.query("INSERT into book(rno,name,email,gender,room) VALUES($1,$2,$3,$4,$5)",[reg_no,name,email,gender,room],(err)=>
{

if(err)
{
    console.log(err)
}
else{
    res.send("todo created")
}

})


})
// app.put("/book",(req,res)=>
// {
//   console.log(req.body);

// const{reg_no,name,email,gender,room}=req.body
// // const{reg_no,name,email,gender,room}=req.body
// pool.query("UPDATE book SET name=$1,email=$2,gender=$3,room=$4 WHERE reg_no=$5",[name,email,gender,room,reg_no],(err)=>
// {

// if(err)
// {
//     console.log(err)
// }
// else{
//     res.send("todo updated")
// }

// })



// })
// app.patch("/book", (req, res) => {
//     console.log(req.body)
  
//     const { reg_no, name, email, gender, room } = req.body;
  
//     pool.query(
//       "UPDATE book SET name=$1, email=$2, gender=$3, room=$4 WHERE reg_no=$5",
//       [name, email, gender, room, reg_no],
//       (err, result) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).send("Error updating book");
//         }
  
//         if (result.rowCount > 0) {
//           res.send("Student updated successfully");
//         } else {
//           res.status(404).send("Student not found"); // Handle case where reg_no doesn't exist
//         }
//       }
//     );
//   });

app.patch("/book/:studentId", (req, res) => {
    const { studentId } = req.params; // Get student ID from URL parameter
    console.log(studentId)
    const studentData = req.body;
    console.log(studentData);
  
    pool.query(
      "UPDATE book SET name=$1, email=$2, gender=$3, room=$4 WHERE rno=$5",
      [studentData.name, studentData.email, studentData.gender, studentData.room, studentId],
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Error updating book");
        }
  
        res.send("Student updated successfully");
      }
    );
  });



  app.delete("/book/:studentId", (req, res) => {
    const { studentId } = req.params; // Get student ID from URL parameter
    console.log(studentId)
    const studentData = req.body;
    console.log(studentData);
  
    pool.query(
      "DELETE FROM book WHERE rno=$1",
      [studentId],
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Error updating book");
        }
  
        res.send("Student DELETED successfully");
      }
    );
  });
  

// app.get("/login",(req,res)=>
// {
//     pool.query("SELECT * FROM login;",(err,data)=>
// {
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         res.json(data.rows)

//     }
// })
// })



app.listen(5001,()=>
{
    console.log("server started , running at 50001");
})

