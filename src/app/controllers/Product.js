const knex = require('../database/index')

class Product {

    show(request, response) {
        knex('products').where('id', request.params.id)
            .then(res => {
                if(res.length == 0) {
                    return response.json({ message: 'Dados não encontrados!' })
                } else {
                    return response.json(res)
                }
            })
    }
    
    read(request, response) {
        knex('products').then(res => {
            return response.json(res)
        })
    }

    create(request, response) {
        const name = request.body.name
        const amount = request.body.amount

        if(name.length == 0 || amount.length == 0) {
            return response.json({ message: 'Informe todos os dados corretamente!' })
        }

        knex('products').insert({ name, amount })
            .then(() => response.json({ message: 'Dados guardados com sucesso!' }))
            .catch(err => response.json({ message: err }))

    }

    update(request, response) {
        const id = request.params.id
        const name = request.body.name
        const amount = request.body.amount

        if(name.length == 0 || amount.length == 0) {
            return response.json({ message: 'Informe todos os dados corretamente!' })
        }

        knex('products')
            .where('id', id)
            .update({ name, amount })
                .then(() => response.json({ message: 'Dados alterados com sucesso!' }))
                .catch(err => response.json({ message: err }))

    }

    delete(request, response) {
        const id = request.params.id

        knex('products')
            .where('id', id)
            .del()
                .then(() => response.json({ message: 'Dados deletados com sucesso!' }))
                .catch(err => response.json({ message: err }))

    }

}

module.exports = Product