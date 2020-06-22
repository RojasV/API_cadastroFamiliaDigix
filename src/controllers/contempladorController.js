const express = require('express')
const router = express.Router()
const Familia = require("../models/Familia")


router.get('/register', async (req, res) => {

    try {
        console.log("requisição feita")
        res.json(await Familia.find({}))

    } catch (error) {
        res.status(500).send(`Erro ao buscar familias: ${error}`)
    }

})

router.get('/register/contemplados', async (req, res) => {


    try {




        const {
            contemplado
        } = req.body

        res.json(await Familia.find({
            contemplado
        }))



    } catch (error) {
        res.status(500).send(`Erro ao buscar familias: ${error}`)
    }

})



router.put('/register', async (req, res) => {

    console.log(req.body)

    try {
        let familiaContemplada = req.body
        if (familiaContemplada.contemplado)
            return res.status(400).send({
                error: 'Família já contemplada'
            })
        if (familiaContemplada.pontuacao < 7)
            return res.status(400).send({
                error: 'O pretendente não possui pontuação suficiente para ser contemplado'
            })
        familiaContemplada.contemplado = true
        res.json(await Familia.findByIdAndUpdate(familiaContemplada._id, familiaContemplada))




    } catch (error) {
        res.status(500).send(`Erro ao editar familia: ${error}`)

    }

})

module.exports = app => app.use('/familia', router)