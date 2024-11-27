const dotenv = require('dotenv')
dotenv.config(); 
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000

/*
app.get('/test', (req, res) => {
  res.render("views/clothes/new.ejs");
  })*/

app.get('/',(req,res) => {
  res.render('index.ejs');
})

app.get("/clothes/new", (req, res) => {
  res.render("clothes/new.ejs");
});

// server.js

// POST /clothes
app.post("/clothes", async (req, res) => {
  if (req.body.available === "on") {
    req.body.available = true;
  } else {
    req.body.available = false;
  }
  await clothes.create(req.body);
  res.redirect("/clothes/new");
});
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const Clothes = require('./models/clothing');
const clothes = require('./models/clothing');
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
  })