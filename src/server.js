const express = require("express"); //import entrie express library
const app = express(); //creating our app object, that houses our server instructions
const port = process.env.PORT || 5001;

app.use("/static", express.static("public")); 
//telling app to use the public folder, when a request is made to /static 

app.listen(port, () => {
    console.log(`listening on post ${port}`);
});
//listening on the given port for requests to our webserver 