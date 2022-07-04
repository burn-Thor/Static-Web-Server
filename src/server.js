const express = require("express"); //import entrie express library
const app = express(); //creating our app object, that houses our server instructions

app.use("/static", express.static("public")); 
//telling app to use the public folder, when a request is made to /static 