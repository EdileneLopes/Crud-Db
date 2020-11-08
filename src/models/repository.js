const mongoose = require('mongoose')

//caminho
const DB_URL = 'mongodb://localhost:27017/reprograma'

const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser: true})
    const connection = mongoose.connection
    connection.on('error', () => console.error('Erro ao se conectar com o MongoDb'))
    connection.once('open', () => console.log('Estamos conectados MongoDB!'))
}

module.exports = {
    connect
}

//arquivo repository CRIA a conexão 