const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const { SENDGRID_KEY, EMAIL, JWT_SECRET } = require("../config/dev.js");


// require('dotenv').config({ path: '.env' });

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: SENDGRID_KEY
    }
}))

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(422).json({ error: "please add all the fields" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "user already exists with that email" })
            }
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const user = new User({
                        email,
                        password: hashedpassword,
                        name
                    })

                    user.save().then((result) => {
                        // transporter.sendMail({
                        //     to: user.email,
                        //     from: { EMAIL },
                        //     subject: "Welcome to Recipe App",
                        //     html: `
                        //             <p>We are delighted to have you as our user. </p>
                        //             <h5>Thank you so much for chosing us.</h5>
                        //             <br></br>
                        //             <br></br>
                        //             <p>Regards</p>
                        //             <p>Recipe App Team</p>
                        //             `
                        // })
                        res.json({ message: "user added successfully! check your email" })
                    }).catch(err => {
                        console.log(err);
                    })
                }).catch(err => {
                    console.log(err)
                })
        }).catch(err => {
            console.log(err)
        });
})





    router.post('/signin', (req, res) => {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(422).json({ error: "please add email or password" })
        }
        User.findOne({ email: email })
            .then(savedUser => {
                if (!savedUser) {
                    return res.status(422).json({ error: "Invalid Email or password" })
                }
                bcrypt.compare(password, savedUser.password)
                    .then(doMatch => {
                        if (doMatch) {
                            // res.json({message:"successfully signed in"})
                            const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
                            const { _id, name, email, followers, following } = savedUser
                            res.json({ token, user: { _id, name, email, followers, following } })
                        }
                        else {
                            return res.status(422).json({ error: "Invalid Email or password" })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
    })


    router.post('/reset-password', (req, res) => {
        crypto.randomBytes(32, (err, buffer) => {
            if (err) {
                console.log(err)
            }
            const token = buffer.toString("hex")
            User.findOne({ email: req.body.email })
                .then(user => {
                    if (!user) {
                        return res.status(422).json({ error: "User dont exists with that email" })
                    }
                    user.resetToken = token
                    user.expireToken = Date.now() + 3600000
                    user.save().then((result) => {
                        transporter.sendMail({
                            to: user.email,
                            from: { EMAIL },
                            subject: "password reset",
                            html: `
                     <p>You requested for password reset</p>
                     <h5>click in this <a href="${EMAIL}/reset/${token}">link</a> to reset password</h5>
                     `
                        })
                        res.json({ message: "check your email" })
                    })

                })
        })
    })


    router.post('/new-password', (req, res) => {
        const newPassword = req.body.password
        const sentToken = req.body.token
        User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
            .then(user => {
                if (!user) {
                    return res.status(422).json({ error: "Try again session expired" })
                }
                bcrypt.hash(newPassword, 12).then(hashedpassword => {
                    user.password = hashedpassword
                    user.resetToken = undefined
                    user.expireToken = undefined
                    user.save().then((saveduser) => {
                        res.json({ message: "password updated success" })
                    })
                })
            }).catch(err => {
                console.log(err)
            })
    })

module.exports = router