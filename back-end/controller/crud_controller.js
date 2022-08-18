import {personsTable} from '../db/db.js'

async function Read(req, res) {
    
}

async function Create(req, res) {
    
    const {first_name, last_name} = req.body

    if (!first_name) {
        res.status(422).json({error: "O nome é obrigatório."})
    } else if (!last_name) {
        res.status(422).json({error: "O sobrenome é obrigatório."})
    }

    const person = {
        first_name,
        last_name
    }

    try {
        await personsTable.create(person)
        res.status(201).json({message: 'Pessoa inserida com sucesso.'})
    } catch (error) {
        res.status(400).json({error: error})
    }
}

async function Update(req, res) {

}

async function Delete(req, res) {

}

export {Read, Create, Update, Delete}