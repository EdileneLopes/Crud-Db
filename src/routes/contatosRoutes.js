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
@endpoint http://localhost:porta/contatos/criar
**/
router.post('contatos/criar', controller.addContato)


/**
@route GET contato
@param : nome
@desc Retorna um contato pelo nome
@access Public 
@endpoint http://localhost:porta/contatos/nome/nome
**/
router.get('contatos/nome/:nome', controller.getPorNome)

/**
@route GET contato
@param : id
@desc Retorna um contato pelo id
@access Public 
@endpoint http://localhost:porta/contatos/id/id
**/
router.get('contatos/id/:id', controller.getPorId)


/**
@route PATCH contato
@param : id
@desc Busca por id e atualiza o telefone do contato
@access Public 
// @endpoint http://localhost:porta/contatos/atualizar/telefone/:id
**/
router.patch('contatos/atualizar/telefone/:id', controller.atualizaFone)

/**
@route PUT contato
@param : id
@desc Busca por id e atualiza o contato
@access Public 
// @endpoint http://localhost:porta/contatos/atualizar/:id
**/
router.put('contatos/atualizar/:id', controller.atualizaContato)

/**
@route DELETE contato
@param : id
@desc Busca por id e apaga o contato
@access Public 
@endpoint http://localhost:porta/contatos/deletar/id
**/
router.delete('contatos/deletar/:id', controller.deleteContato)



module.exports = router
