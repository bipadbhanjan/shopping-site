const express = require("express");

const mongoose = require("mongoose");
const productRouter = require("./routes/productRoutes");
const cors = require("cors");


const app = express();

app.use (cors( {origin: " * "}));

    // {origin: "http://localhost:3000"}))
    
const mongoDburl = "mongodb+srv://bijan:sushruta@cluster0.7w8qo50.mongodb.net/shopping_site?retryWrites=true&w=majority"

mongoose.connect(mongoDburl,{});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongodb connection error: "));

db.once("open", ()=> {

    console.log("connected to MongoDB");
})

// app.get("/en-US/docs/Learn", (req, res, next)=> {
//     res.send("Hello server");
// });

// app.get("/hello", (req, res, next)=> {
//     res.send("Hi");
// });


app.use(express.json());
app.use(productRouter);

app.listen(4000, "0.0.0.0",()=> {
console.log("Server started at port 4000");
});


