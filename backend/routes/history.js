const express = require('express');
const router = express.Router();
const History = require('../models/history');
const verifyToken = require('./verification');



router.get('/', async (req, res) => {
  await History.findAll().then((users) => res.json(users))
})



router.get('/:id', async (req, res) => {
  await History.findByPk(req.params.id).then((users) => res.json(users))
})



router.post('/', async (req, res) => {
  history = new History
  await History.create({
    available: req.body.available,
    driver_id: req.body.driver_id
  })
  .then((hist) => res.json(hist))
})



router.put('/:id', async (req, res) => {
  History.findByPk(req.params.id).then((users) => {
      users.update({
        available: req.body.available,
        driver_id: req.body.driver_id
      }).then((users) => {
          res.json(users);
      });
  });
})



router.delete('/:id', async (req, res) => {
  await History.findByPk(req.params.id).then((users) => {
      users.destroy();
  }).then(() => {
      res.json("deleted");
  });
});



router.delete('/', async (req, res) => {
  await History.destroy({where:{},truncate : true}).then(() => res.json("cleared"))
});




module.exports = router;
