const fs = require("fs");
let notes = require("../db/db.json")
const app = require("express").Router;

app.get("/api/routes", function(req, res){
    notes = fs.readFileSync("./db/db.json")
    console.log("get", notes)
    res.json(notes)
})


app.post("/api/routes", function(req, res){
    let newNote = {
        id: Math.floor(Math.random() * 1000 ),
        title: req.body.title,
        next: req.body.text
    }
    notes.push(newNote)
    fs.writeFileSync("./db/db.json", notes, function(err, data) {
        if (err) throw err;
    })

    console.log("post", notes)
    res.json(notes)
})