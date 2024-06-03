require('dotenv').config();

const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! ");
});

app.get('/twitter',(req,res) =>{
    res.send('Dheerajdotcom');
})

app.get('/login',(req,res) => {
    res.send('<h1>Please login at this webpage</h1>')
})

app.get('/youtube',(req,res) => {
    res.send('<h2>Hey everyone ,welcome to youtube.</h2>')
})

app.listen(process.env.PORT,() => {
    console.log(`Example app is listening on port ${port}`)
});

// console.log("Chai aur code");
