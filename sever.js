// Create all of the required items 

const express = require("express");
const fs = require("fs");
const path = require("path");
const notes = require("./db/db.json")

// get Express and call for Port

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));


// Use GET and POST to read db.json * `POST /api/notes` 
// should receive a new note to save on the request body, add it to the `db.json` 

