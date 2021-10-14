// Create all of the required items 

const express = require("express");

const app = express();


const PORT = process.env.PORT || 3000


app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(express.static("public"));
const apiroutes = require("./routes/apiroutes");
const htmlRoutes = require("./routes/htmlroutes");
// get Express and call for Port;
app.use(apiroutes)


app.use(htmlRoutes);

app.listen(PORT, function(){
    console.log("server listening on PORT ", PORT)
})