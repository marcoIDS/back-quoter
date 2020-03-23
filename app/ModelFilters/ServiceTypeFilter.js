'use strict'

const ModelFilter = use('ModelFilter')

class ServiceTypeFilter extends ModelFilter {

    name (name) {
        return this.where(function () {
            this.where('name', 'LIKE', `%${name}%`)
        })
    }

    active (active) {
        return this.where(function () {
            this.where('active', active)
        })
    }
}

module.exports = ServiceTypeFilter
