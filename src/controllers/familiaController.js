const express = require('express')

const Familia = require('../models/Familia')

const router = express.Router()

const PontuadorDeFamilia = require('../Util/PontuadorDeFamilia')



router.post('/register', async (req, res) => {
    const {
        cpfPretendente,

    } = req.body

    const {
        cpfConjuge
    } = req.body



    try {

        /* Checa se os CPFs já foram cadastrados */

        if (await Familia.findOne({
                cpfPretendente

            }) || await Familia.findOne({
                cpfConjuge

            }))
            return res.status(400).send({
                error: 'cpf ja cadastrado'
            })

        /* Se os CPFs já foram cadastrados chama serviço de pontuação da família cadastrada 
        pra pontuar à mesma de acordo com os dados*/

        req.body.pontuacao = PontuadorDeFamilia(req.body)

        /* Cadastra à familia no banco de dados já pontuada */

        const familia = await Familia.create(req.body);

        return res.send({
            familia
        });

    } catch (err) {
        return res.status(400).send({
            error: 'registration failed'
        })
    }
})

module.exports = app => app.use('/familia', router)