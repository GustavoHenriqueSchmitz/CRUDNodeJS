import {personsTable} from '../db/db.js'

async function Read(req, res) {
    
    try {
        const persons = await personsTable.findAll()
        res.json(persons)
    } catch (error) {
        res.json({error: error})
    }
}

async function Create(req, res) {
    
    const {first_name, last_name} = req.body

    if (!first_name) {
        res.json({error: "O nome é obrigatório."})
    } else if (!last_name) {
        res.json({error: "O sobrenome é obrigatório."})
    }

    const person = {
        first_name,
        last_name
    }

    try {
        await personsTable.create(person)
        res.json({message: 'Pessoa inserida com sucesso.'})
    } catch (error) {
        res.json({error: error})
    }
}

async function Update(req, res) {

    const id = req.params.id

    const {first_name, last_name} = req.body

    if (!first_name) {
        res.json({error: "O nome é obrigatório."})
    } else if (!last_name) {
        res.json({error: "O sobrenome é obrigatório."})
    }

    const person = {
        first_name,
        last_name
    }

    try {
        const updatedPerson = await personsTable.update(
            { first_name: person.first_name, last_name: person.last_name},
            { where: { id: id } }
          )
        res.json({message: updatedPerson})
    } catch (error) {
        res.json({error: error})
    }
}

async function Delete(req, res) {

    const id = req.params.id

    const person = await personsTable.findOne({
        where: {
            id : id
        }
    })

    if (!person) {
        res.json({message: 'O usuário não existe!'})
        return
    }

    try {
        await personsTable.destroy({
            where: {
              id: id
            }
        })
        res.json({message: 'Sucesso!'})
    } catch (error) {
        res.json({error: error})
    }
}

export {Read, Create, Update, Delete}