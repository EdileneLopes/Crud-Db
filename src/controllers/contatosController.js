const { response } = require("express")
const contatosCollection = require('../models/contatosSchema')

const getAll = (request, response) => {
    console.log('essa é a url do getall', request.url)
    contatosCollection.find((error, contatos)=> {
        if(error){
            return response.status(500).send(error)
        } else{
            return response.status(200).send({
                mensagem: 'GET com sucesso',
                contatos
            })
        }
    })
}

  const addContato = (request, response) => {
     console.log(request.url)
    const contatoDoBody = request.body //pegando o que o usuário digitou
    const contato = new contatosCollection(contatoDoBody)
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

const atualizaFone = (request, response) => {
    const idParam = request.params.id
    const contatoBody = request.body
    const novo = {new : true}

    contatosCollection.findByIdAndUpdate(idParam, {$set:contatoBody}, novo, (error, contato) => {
        if(error){
                return response.status(500).send(error)
            }else if(contato){
                return response.status(200).send(contato)
            }else {
                return response.status(404).json({
                    mensagem: 'Contato não encontrado, não foi possível atualizar' //não deu certo a msg de erro...
                })
            }
        }
    )
}


module.exports = {
    getAll,
    addContato,
    getPorNome,
    getPorId,
    atualizaFone,
    
    
}