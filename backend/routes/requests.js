const express = require('express');
const router = express.Router();
const Requests = require('../models/requests');
const verifyToken = require('./verification');




router.get('/', async (req, res) => {
  await Requests.findAll().then((users) => res.json(users))
})



router.get('/:id', async (req, res) => {
  await Requests.findByPk(req.params.id).then((users) => res.json(users))
})



router.post('/', async (req, res) => {
  await Requests.create({
    request: req.body.request,
    driver_id: req.body.driver_id,
    x: req.body.x,
    y: req.body.y
  })
  .then((users) => res.json(users))
})



router.put('/:id', async (req, res) => {
  Requests.findByPk(req.params.id).then((users) => {
      users.update({
        request: req.body.request,
        driver_id: req.body.driver_id,
        x: req.body.x,
        y: req.body.y
      }).then((users) => {
          res.json(users);
      });
  });
})



router.delete('/:id', async (req, res) => {
  await Requests.findByPk(req.params.id).then((users) => {
      users.destroy();
  }).then(() => {
      res.json("deleted");
  });
});



router.delete('/', async (req, res) => {
  await Requests.destroy({where:{},truncate : true}).then(() => res.json("cleared"))
});




module.exports = router;
