import personsTable from '../models/person_models.js'

async function Read(req, res) {
    
    try {
        const persons = await personsTable.findAll()
        return res.json(persons)
    } catch (error) {
        return res.json({error: error})
    }
}

async function Create(req, res) {
    
    const {first_name, last_name} = req.body

    if (!first_name) {
        return res.json({error: "O nome é obrigatório."})
    } else if (!last_name) {
        return res.json({error: "O sobrenome é obrigatório."})
    }

    const person = {
        first_name,
        last_name
    }

    try {
        await personsTable.create(person)
        return res.json({message: 'Pessoa inserida com sucesso.'})
    } catch (error) {
        return res.json({error: error})
    }
}

async function Update(req, res) {

    const id = req.params.id

    const personExist = await personsTable.findOne({
        where: {
            id : id
        }
    })

    if (!personExist) {
        return res.json({message: 'O usuário não existe!'})
    }

    const {first_name, last_name} = req.body

    if (!first_name) {
        return res.json({error: "O nome é obrigatório."})
    } else if (!last_name) {
        return res.json({error: "O sobrenome é obrigatório."})
    }

    const person = {
        first_name,
        last_name
    }

    try {
        await personsTable.update(
            { first_name: person.first_name, last_name: person.last_name},
            { where: { id: id } }
          )
        return res.json({message: "Sucesso!"})
    } catch (error) {
        return res.json({error: error})
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
        return res.json({message: 'O usuário não existe!'})
    }

    try {
        await personsTable.destroy({
            where: {
              id: id
            }
        })
        return res.json({message: 'Sucesso!'})
    } catch (error) {
        return res.json({error: error})
    }
}

export {Read, Create, Update, Delete}