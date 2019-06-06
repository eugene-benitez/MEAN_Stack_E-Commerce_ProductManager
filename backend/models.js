const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product-manager2', { useNewUrlParser: true });


var ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 4,
        required: [true, "Name must be greater than 3 characters."]
    },

    price: {
        type: Number,
        min: 0,
        required: [true, "Price must be greater than 1"]
    },

    image: {
        type: String,
    },

}
    , { timestamps: true });


module.exports = mongoose.model('Product', ProductSchema);