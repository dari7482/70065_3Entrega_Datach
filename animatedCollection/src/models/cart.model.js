const mongoose = require("mongoose")

const cartCollection = "carts"


const cartSchema = new mongoose.Schema({
    product: {
        type: Array,
        default: []
    }

})

const cartModel = mongoose.model(cartCollection, cartSchema)

module.exports = { cartModel }
