import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function Read(req, res) {
    
    try {
        const persons = await prisma.persons.findMany()
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
        await prisma.persons.create({ data: person })
        return res.json({message: 'Pessoa inserida com sucesso.'})
    } catch (error) {
        return res.json({error: error})
    }
}

async function Update(req, res) {

    const id = req.params.id

    const personExist = await prisma.persons.findUnique({
        where: {
            id : parseInt(id)
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
        await prisma.persons.update({
            where: {id: parseInt(id)},
            data: person
        })
        return res.json({message: "Sucesso!"})
    } catch (error) {
        console.log(error)
        return res.json({error: error})
    }
}

async function Delete(req, res) {

    const id = req.params.id

    const person = await prisma.persons.findUnique({
        where: {
            id : parseInt(id)
        }
    })

    if (!person) {
        return res.json({message: 'O usuário não existe!'})
    }

    try {
        await prisma.persons.delete({
            where: {
              id: parseInt(id)
            }
        })
        return res.json({message: 'Sucesso!'})
    } catch (error) {
        return res.json({error: error})
    }
}

export {Read, Create, Update, Delete}