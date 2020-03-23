'use strict'

const ModelFilter = use('ModelFilter')

class PhotoFilter extends ModelFilter {
    
    url (url) {
        return this.where(function () {
            this.where('url', 'LIKE', `%${url}%`)
        })
    }

    service_id (service_id) {
        return this.where(function () {
            this.where('service_id', service_id)
        })
    }

    condominium_id (condominium_id) {
        return this.where(function () {
            this.where('condominium_id', +condominium_id)
        })
    }
}

module.exports = PhotoFilter
