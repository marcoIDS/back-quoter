'use strict'

const ModelFilter = use('ModelFilter')

class RoleFilter extends ModelFilter {
    
    name (name) {
        return this.where(function () {
            this.where('name', 'LIKE', `%${name}%`)
        })
    }

    description (description) {
        return this.where(function () {
            this.where('description', 'LIKE', `%${description}%`)
        })
    }
}

module.exports = RoleFilter
