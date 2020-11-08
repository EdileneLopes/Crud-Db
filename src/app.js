const express = require('express')
const app = express()
const cors = require('cors')

const  database  =  require('./models/repository')
database.connect()

const index = require('./routes/index')
const contatos = require('./routes/contatosRoutes')

app.use(cors())
app.use(express.json())
app.use('/', index)//rota raíz retorna index
app.use('/contatos', contatos)//rota raíz retorna os dados do banco de dados

module.exports = app
