const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json({product: newProduct})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong.', error: err})
        });
}

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({products: allProducts})
        })
        .catch((err) => {
            res.json({message:'Something went wrong.', error: err})
        });
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id:request.params._id})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}