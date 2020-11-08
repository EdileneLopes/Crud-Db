const { response } = require("express")
const contatosCollection = require('../models/contatosSchema')

const getAll = (request, response) => {
    console.log('essa é a url do getall', request.url)
    contatosCollection.find((error, contatos)=> {
        if(error){
            return response.status(500).send(error)
        } else{
            return response.status(200).json({
                mensagem: 'Tudo certo',
                contatos
            })
        }
    })
}

  const addContato = (request, response) => {
     console.log(request.url)
    const contatoDoBody = request.body //pegando o que o usuário digitou
    console.log('o que veio do body', contatoDoBody)
    const contato = new contatosCollection(contatoDoBody)
    console.log('variável contato: ', contato)
    contato.save((error) => {
        if(error){
            return response.status(400).send(error)
        } else{
            return response.status(201).json({
                mensagem: 'POST feito com sucesso',
                contato
            })
        }
    })
}
 
const getPorNome = (request, response) => {
    const nome = request.params.nome
    contatosCollection.find({nome: nome}, (error, contato) => {
        if(error){
            return response.status(500).send(error)
        }else if (contato == "") {
            return response.status(400).json({
                mensagem: 'Ops contato não encontrado!',
            })
        } else {
            return response.status(200).send(contato)
        }
    })
}

const getPorId = (request, response) => {
    const idParam = request.params.id
    contatosCollection.findById( idParam, (error, contato) => {
        if(error){
            return response.status(500).send(error)
        } else {
            if(contato){
                return response.status(200).send(contato)
            }else {
                return response.status(404).json({
                    mensagem: 'Contato não encontrado :('
                })//arrumar o erro quando não encontrado...
            }
        }
    })
}


module.exports = {
    getAll,
    addContato,
    getPorNome,
    getPorId
    
}