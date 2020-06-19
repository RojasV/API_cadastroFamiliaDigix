const express = require('express')

const Familia = require('../models/Familia')

const router = express.Router()

router.post('/register', async (req, res) => {
    try {
        const familia = await Familia.create(req.body)

        return res.send({
            familia
        })
    } catch (err) {
        return res.status(400).send({
            error: 'registration failed'
        })
    }
})

module.exports = app => app.use('/registro', router)