const express = require('express');
const router = express.Router();
const Cars = require('../models/cars');

router.get('/', async (req, res) => {
    await Cars.findAll().then((users) => res.json(users))
  })

  router.get('/car', async (req, res) => {
  await Cars.findOne({where: {type: req.body.type}}).then((cars) => res.json(cars))
  })

router.post('/', async (req, res) => {
  await Cars.create({
    type : req.body.type,
    image : req.body.image,
    price : req.body.price,
    description : req.body.description
  })
  .then((cars) => res.json(cars))
})



module.exports = router ;  