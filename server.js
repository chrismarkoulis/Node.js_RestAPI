const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

// Enable CORS 
app.use(cors());


// Add body-parser middlewares 

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) =>{
    res.json({message: "welcome to my App"});
});

require("./app/routes/movie.routes.js")(app);

// set port, listen for requests
// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

