// Create all of the required items 

const express = require("express");


// get Express and call for Port

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));


