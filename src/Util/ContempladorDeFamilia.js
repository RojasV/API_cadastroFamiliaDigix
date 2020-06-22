module.exports = router.put('/register', async (req, res) => {

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