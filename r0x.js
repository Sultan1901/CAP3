const express = require("express");
const app = express();
// const morgan = ('morgan')
const PORT = 5050;
// const cors = require("cors");
// const dotenv = require("dotenv");

// require('dotenv').config();

// // const Server = require('./models/server');
// const server = new Server();
// server.listen();


app.get("/" , (req,res)=>{
    res.send("recieve")
})


app.listen(PORT, (req, res) => {
  console.log(`${PORT}'OK'`);
});
