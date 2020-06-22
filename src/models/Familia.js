const mongoose = require("../database")





const FamiliaSchema = new mongoose.Schema({

    cpfPretendente: {
        type: String,

    },

    cpfConjuge: {
        type: String,
    },

    quantidadeDependentes: {
        type: Number
    },

    idadePretendente: {
        type: Number
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
    },

    pontuacao: {
        type: Number,
        default: 0
    },

    contemplado: {

        type: Boolean,
        default: false,


    }

});

const Familia = mongoose.model('Familia', FamiliaSchema, 'familias')


module.exports = Familia;