const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


const adminAuthRoutes = require("../BackEnd/routes/admin/auth");
const adminHomeRoutes = require("../BackEnd/routes/admin/home");

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//mogo db connection
// mongoose
//   .connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true })

mongoose.set("strictQuery", false);

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

  

    const db = mongoose.connection;

    // db.on('error', console.error.bind(console, 'connection error:'));
    
    // db.once('open', function() {
    //   console.log("Connected to MongoDB");
    // });
    

// app.use("/api", adminAuthRoutes);
// app.use("/api", adminHomeRoutes);

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Backend is running on port ${port}`)
})

app.get("/",(req,res)=>{
    res.send("Health Project");
})


module.exports = app;