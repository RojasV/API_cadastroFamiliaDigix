const mongoose = require("../database")



const FamiliaSchema = new mongoose.Schema({


    pessoas: [{


            nome: {
                type: String,
            },


            cpf: {
                type: String,
            },

            idade: {
                type: Number,


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
        default: new Date().toLocaleDateString("pt-br")
    }

})

const Familia = mongoose.model('Familia', FamiliaSchema)


module.exports = Familia