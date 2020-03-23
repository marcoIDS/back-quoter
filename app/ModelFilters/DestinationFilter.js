'use strict'

const ModelFilter = use('ModelFilter')

class DestinationFilter extends ModelFilter {

    name (name) {
        return this.where(function () {
            this.where('name', 'LIKE', `%${name}%`)
        })
    }

    city (city) {
        return this.where(function () {
            this.where('city', 'LIKE', `%${city}%`)
        })
    }

    city (city) {
        return this.where(function () {
            this.where('city', 'LIKE', `%${city}%`)
        })
    }

    country (country) {
        return this.where(function () {
            this.where('country', 'LIKE', `%${country}%`)
        })
    }

    country (country) {
        return this.where(function () {
            this.where('country', 'LIKE', `%${country}%`)
        })
    }

    continent(continent) {
        return this.where(function () {
            this.where('continent', 'LIKE', `%${continent}%`)
        })
    }


}

module.exports = DestinationFilter
