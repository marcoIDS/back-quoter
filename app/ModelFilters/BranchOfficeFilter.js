'use strict'

const ModelFilter = use('ModelFilter')

class BranchOfficeFilter extends ModelFilter {

    name (name) {
        return this.where(function () {
            this.where('name', 'LIKE', `%${name}%`)
        })
    }

    description (description){
        return this.where(function () {
            this.where('description', 'LIKE', `%${description}%`)
        })
    }

    contact (contact){
        return this.where(function () {
            this.where('contact', 'LIKE', `%${contact}%`)
        })
    }

    phone (phone){
        return this.where(function () {
            this.where('phone', 'LIKE', `%${phone}%`)
        })
    }

    cellphone (cellphone){
        return this.where(function () {
            this.where('cellphone', 'LIKE', `%${cellphone}%`)
        })
    }

    email (email){
        return this.where(function () {
            this.where('email', 'LIKE', `%${email}%`)
        })
    }

    email (email){
        return this.where(function () {
            this.where('email', 'LIKE', `%${email}%`)
        })
    }

    supplier_id(supplier_id){
        return this.where(function () {
            this.where('supplier_id','=' ,+supplier_id)
        })
    }

    destination_id(destination_id){
        return this.where(function () {
            this.where('destination_id', destination_id)
        })
    }
}

module.exports = BranchOfficeFilter
