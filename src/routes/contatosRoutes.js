const express = require('express')
const router = express.Router()
const controller = require('../controllers/contatosController')

/**
@route GET contatos
@desc Retornar todos os contatos
@acess Public
@endpoint http://localhost:porta/contatos
@endpoint http://localhost:porta/  - traz a mensagem do index
**/
router.get('/', controller.getAll)

/**
@route POST contato
@desc Cria um novo contato na lista
@access Public 
@endpoint http://localhost:porta/criar
**/
router.post('/criar', controller.addContato)


module.exports = router
