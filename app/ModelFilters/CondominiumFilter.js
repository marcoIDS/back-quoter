'use strict'

const ModelFilter = use('ModelFilter')

class CondominiumFilter extends ModelFilter {

    name (name) {
        return this.where(function () {
            this.where('name', 'LIKE', `%${name}%`)
        })
    }

    description (description) {
        return this.where(function () {
            this.where('name', 'LIKE', `%${description}%`)
        })
    }

    numberPeople (numberPeople) {
        return this.where(function () {
            this.where('numberPeople',numberPeople)
        })
    }

    numberRooms (numberRooms) {
        return this.where(function () {
            this.where('numberRooms',numberRooms)
        })
    }
}

module.exports = CondominiumFilter
