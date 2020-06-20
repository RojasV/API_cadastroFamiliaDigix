const mongoose = require("../database")





const FamiliaSchema = new mongoose.Schema({

    cpfPretendente: {
        type: String,

    },

    pessoas: [{

            nome: {
                type: String,
            },
            dataDeNascimento: {
                type: String,


            },
            tipo: {

                type: String,

            },
        }


    ],


    rendaTotal: {
        type: Number,

    },

    data_Inscricao: {

        type: Date,
        default: Date.now
    }

});

const Familia = mongoose.model('Familia', FamiliaSchema)


module.exports = Familia;