const { response, request } = require("express")
const contatosCollection = require('../models/contatosSchema')

const getAll = (request, response) => {
    console.log('essa é a url do getall', request.url)
    contatosCollection.find((error, contatos) => {
        if (error) {
            return response.status(500).send(error)
        } else {
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
        if (error) {
            return response.status(400).send(error)
        } else {
            return response.status(201).json({
                mensagem: 'POST feito com sucesso',
                contato
            })
        }
    })
}

const getPorNome = (request, response) => {
    const nomeParam = request.params.nome
    console.log('nome do param', nomeParam)
    contatosCollection.find({ nome : nomeParam }, (error, contato) => {
        console.log('esse é o nome dentro da função', nome)
        if (error) {
            return response.status(500).send(error)
        } else if (contato == "") {
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
    contatosCollection.findById(idParam, (error, contato) => {
        if (error) {
            return response.status(500).send(error)
        } else if (contato == undefined) {
            console.log('contato no else:', contato)
            return response.status(404).json({
                mensagem: 'Contato não encontrado :('
          })     
        } else {
            return response.status(200).send(contato)
        }
    })
}

const atualizaFone = (request, response) => {
    const idParam = request.params.id
    const contatoBody = request.body.celular
    const novo = { new: true }   //fazendo update e não criando novo

    contatosCollection.findByIdAndUpdate(
        idParam,
        { $set: { celular: contatoBody } },
        novo,
        (error, contato) => {
            if (error) {
                return response.status(500).send(error)
            } else if (contato) {
                return response.status(200).send({
                    mensagem: 'Telefone alterado com sucesso',
                    contato
                })
            } else {
                return response.status(404).send({
                    mensagem: 'Ocorreu um erro, favor verificar telefone'   //não está dando certo a msg de erro...

                })
            }
        })
}

const atualizaContato = (request, response) => {         
    const idParams = request.params.id
    const contatoBody = request.body
    const novo = { new: true } 

    console.log('esse é o id linha 94: ', idParams)
    console.log('o contato do body linha 95: ', contatoBody)

    contatosCollection.findByIdAndUpdate(
        idParams, 
        contatoBody, 
        novo, 
        (error, contato) => {
        console.log('id', idParams)
        console.log('o contato:' , contato)

        if(error){
            return response.status(500).send(error)
        } else {
            return response.status(200).send({
                mensagem: 'Contato alterado.',
                contato
            })
        
        }
})
}


const deleteContato = (request, response) => {
    const idParam = request.params.id
    contatosCollection.findByIdAndDelete(idParam, (error, contato) => {
        if (error) {
            return response.status(500).json({
                mensagem: 'Contato não encontrado...não foi possível apagar.'
            })
        } else if (contato) {
            console.log(contato)
            return response.status(200).send('O contatinho foi apagado com sucesso :(')
        } else {

        }
    })
}



module.exports = {
    getAll,
    addContato,
    getPorNome,
    getPorId,
    atualizaFone,
    atualizaContato,
    deleteContato

}