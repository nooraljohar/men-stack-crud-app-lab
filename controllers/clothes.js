const Clothes = require('../models/clothing');

const router = require('express').Router();

router.get('/clothes', async (req, res) => {
    const clothes = await Clothes.find()
    res.render('clothes/index.ejs', { clothes })
  })

router.get('/clothes/new', (req, res) => {
    res.render('clothes/new.ejs')
  })

  router.get('/clothes/:clotheId', async (req, res) => {
    const clothe = await Clothes.findById(req.params.clotheId)
    res.render('clothes/show.ejs', { clothe })
  })
  router.delete('/clothes/:clotheId', async (req, res) => {
    await Clothes.findByIdAndDelete(req.params.clotheId)
    res.redirect('/clothes')
  })
  router.get('/clothes/:clotheId/edit', async (req,res)=>{
    const clothe= await Clothes.findById(req.params.clotheId)
    res.render('clothes/edit.ejs',{clothe})
  })
  router.put("/clothes/:clotheId", async (req, res)=>{
    if(req.body.available === 'on'){
      req.body.available = true
    }else{
      req.body.available = false
    }
    await Clothes.findByIdAndUpdate(req.params.clotheIdId, req.body)
    res.redirect(`/clothes/${req.params.clotheId}`)
  })

  router.post('/clothes', async (req, res) => {
    //when the form data is posted, add item to database
    if (req.body.available === 'on') {
      req.body.available = true
    } else {
      req.body.available = false
    }
    await Clothes.create(req.body)
    res.redirect('./clothes/')
  })
  router.get('/clothes', async (req, res) => {
    const clothes = await Clothes.find()
    res.render('clothess/index.ejs', { clothes })
  })

  module.exports = router;