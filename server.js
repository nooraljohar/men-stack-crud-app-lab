const dotenv = require('dotenv')
dotenv.config(); 
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
const PORT = 3000


app.get('/',(req,res) => {
  res.render('index.ejs');
})

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const Clothes = require('./models/clothing')

//it tell the system to expect a data in text form instead of json
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

//require controller 
const clotheCtrl = require('./controllers/clothes')

//use controller 
app.use('/',clotheCtrl)

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})