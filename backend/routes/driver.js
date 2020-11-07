const express = require('express');
const router = express.Router();
const Drivers = require('../models/driver');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyToken = require('./verification')
const dotenv = require('dotenv');
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
dotenv.config();

router.get('/', async (req, res) => {
  await Drivers.findAll().then((users) => res.json(users))
})

router.get('/:id', async (req, res) => {
  await Drivers.findByPk(req.params.id).then((users) => res.json(users))
})

router.post('/signup', async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt)
  await Drivers.create({ firstName: req.body.firstName, lastName: req.body.lastName, password: hashPassword, email: req.body.email, yearOfBirth: req.body.yearOfBirth, idCard: req.body.idCard, driveLicense: req.body.driveLicense, car: req.body.car, location: req.body.location, km: req.body.km })
    .then((driver) => res.json(driver))
})

router.post('/login', async (req, res) => {
  const driver = await Drivers.findOne({ where: { email: req.body.email } })
  if (!driver) return res.send('email is wrong')
  const validPass = await bcrypt.compare(req.body.password, driver.password)
  if (!validPass) return res.status(400).send('password is wrong')
  const token = jwt.sign({ id: Drivers.id }, process.env.TOKEN)
  res.header('auth-token', token).send(token)
})

router.post('/sendemail', async (req, res) => {
    await Drivers.findAll({ where: { email: req.body.email } }).then((obj) => {
        nodemailer.createTestAccount((err, email) => {
            var transporter = nodemailer.createTransport(
                smtpTransport({
                    service: "gmail",
                    port: 465,
                    secure: false,
                    host: "smtp.gmail.com",
                    auth: {
                        user: "tuber.tunisie@gmail.com",
                        pass: "tuber05112020",
                    },
                    tls: {
                        rejectUnauthorized: false,
                    },
                })
            );

            let mailOptions = {
                from: "tuber.tunisie@gmail.com",
                to: `${req.body.email}`,
                subject: "my tuber application",
                text: `thanks u for sign in .`,
            };
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err);
                }
                res.send(info);
            });
        });
    });
});


module.exports = router;
