'use strict'

const ModelFilter = use('ModelFilter')

class ServiceFilter extends ModelFilter {
    
    name (name) {
        return this.where(function () {
            this.where('name', 'LIKE', `%${name}%`)
        })
    }

    numberPeople (numberPeople) {
        return this.where(function () {
            this.where('numberPeople',numberPeople)
        })
    }

    cost (cost) {
        return this.where(function () {
            this.where('cost',cost)
        })
    }

    condominium_id (condominium_id) {
        return this.where(function () {
            this.where('condominium_id',condominium_id)
        })
    }

    branch_office_id (condominium_id) {
        return this.where(function () {
            this.where('branch_office_id',branch_office_id)
        })
    }
}

module.exports = ServiceFilter
