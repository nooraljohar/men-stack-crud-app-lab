
const Clothe = require('../models/clothes');

const router = require('express').Router();

router.get('/clothes', async (req, res) => {
    const clothes = await Clothe.find()
    res.render('clothes/index.ejs', { clothes })
  })

router.get('/clothes/new', (req, res) => {
    res.render('clothes/new.ejs')
  })

  router.get('/clothes/:clotheId', async (req, res) => {
    const clothe = await Clothe.findById(req.params.clotheId)
    res.render('clothes/show.ejs', { clothe })
  })
  router.delete('/clothes/:clotheId', async (req, res) => {
    await Clothe.findByIdAndDelete(req.params.clotheId)
    res.redirect('/clothes')
  })
  router.get('/clothes/:clotheId/edit', async (req,res)=>{
    const clothe= await Clothe.findById(req.params.clotheId)
    res.render('clothes/edit.ejs',{clothe})
  })
  router.put("/clothes/:clotheId", async (req, res)=>{
    if(req.body.isavailable === 'on'){
      req.body.isavailable = true
    }else{
      req.body.isavailable = false
    }
    await Clothe.findByIdAndUpdate(req.params.clotheId, req.body)
    res.redirect(`/clothes/${req.params.clotheId}`)
  })

  router.post('/clothes', async (req, res) => {
    //when the form data is posted, add item to database
    if (req.body.isavailable === 'on') {
      req.body.isavailable = true
    } else {
      req.body.isavailable = false
    }
    await Clothe.create(req.body)
    res.redirect('./clothes/')
  })
  router.get('/clothes', async (req, res) => {
    const clothes = await Clothe.find()
    res.render('clothes/index.ejs', { clothes })
  })

  module.exports = router;