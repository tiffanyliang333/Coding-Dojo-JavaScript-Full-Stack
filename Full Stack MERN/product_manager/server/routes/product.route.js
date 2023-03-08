const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.getAllProducts);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.put('/api/products/edit/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
};