
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const usersRouter = require("./routes/users.route");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/users", usersRouter);

//home route
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
})

//route not found
app.use((req,res,next)=>{
    res.status(404).json({
        message: "request not found"
    })
})

//server error
app.use((err,req,res,next)=>{
    res.status(500).json({
        message: "something broke!"
    })
})



module.exports = app;