const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

require('./controllers/familiaController')(app)
require('./controllers/contempladorController')(app)


app.listen(3000, () => {
    console.log("bem-vindo ao sistema digix")
})