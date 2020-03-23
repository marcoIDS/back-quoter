'use strict'

const ModelFilter = use('ModelFilter')

class SupplierFilter extends ModelFilter {
    nameSupplier (nameSupplier) {
        return this.where(function () {
            this.where('nameSupplier', 'LIKE', `%${nameSupplier}%`)
        })
    }

    contact (contact) {
        return this.where(function () {
            this.where('contact', 'LIKE', `%${contact}%`)
        })
    }

    phone (phone) {
        return this.where(function () {
            this.where('phone', 'LIKE', `%${phone}%`)
        })
    }
    
    cellphone (cellphone) {
        return this.where(function () {
            this.where('cellphone', 'LIKE', `%${cellphone}%`)
        })
    }

    email (email) {
        return this.where(function () {
            this.where('email', 'LIKE', `%${email}%`)
        })
    }

    type_service_id (type_service_id) {
        return this.where(function () {
            this.where('type_service_id',type_service_id)
        })
    }
}

module.exports = SupplierFilter
