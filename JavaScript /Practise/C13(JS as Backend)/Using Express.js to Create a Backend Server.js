//node as express were it act as server , where we can serve html and use JS as backend
//understanding ExpressJS
//installing express JS npm install express

// npm i -g nodemon will install globally this package this is like spring boot devtool
// nodemon '.\Using Express.js to Create a Backend Server.js'
// for every change it will restart and new changes can be seen

//running our code
const express = require("express");
const path = require("path");
const app = express();
const port = 3001;

//get
//explained req is request that will come from browser from client but res is response which we want to give for the request

app.get("/", (req, res) => {
  // have only one res
  //   res.send("Hello World!" + req.query.name); //printing this in browser as response
  //   OR sending a HTML file as response
  //   calling html file for this request
  res.sendFile(path.join(__dirname, "./index.html"));
  console.log(req);
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/contact", (req, res) => {
  res.send("contact us page");
});

app.get("/home", (req, res) => {
  res.send("home page");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

//http://localhost:3000/
