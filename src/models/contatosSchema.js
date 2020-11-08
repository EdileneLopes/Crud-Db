const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contatoSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId, //tipo do dado
        auto: true, //autogerado?
        required: true //é obrigatório?
    },
    nome:{
        type: String,
        required: true
    },
    celular:{
        type: String,
        required: true
    },
    dataNascimento:{
        type: Date,
        required: true
    },
    fotoPerfil:{
        type: String,
        required: false
    }

})


const contatosCollection = mongoose.model('contatos', contatoSchema)

module.exports = contatosCollection
