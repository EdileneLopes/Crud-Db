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


/**
@route GET contato
@param : nome
@desc Retorna um contato pelo nome
@access Public 
@endpoint http://localhost:porta/contatos/nome/nome
**/
router.get('/nome/:nome', controller.getPorNome)

/**
@route GET contato
@param : id
@desc Retorna um contato pelo id
@access Public 
@endpoint http://localhost:porta/contatos/id/id
**/
router.get('/id/:id', controller.getPorId)

module.exports = router
