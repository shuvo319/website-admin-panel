const express = require("express");
const app = express();
const router = require("./router/auth-router");

//postman json convert use
app.use(express.json());

app.use("/api/auth", router);


// app.get("/",(req, res) => {
//     res.status(200).send("Server connected succesfully");
// });

// app.get("/registration",(req, res) =>{
//     res.status(200).send("Welcome to registration page");
// });

const PORT = 8000;
app.listen( PORT, () => {
    console.log(`Server successfuylly connected at: ${PORT}`);
});