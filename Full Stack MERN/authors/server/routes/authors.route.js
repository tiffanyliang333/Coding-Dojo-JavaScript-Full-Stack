const AuthorController = require('../controllers/authors.controller');

module.exports = app => {
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors/:id', AuthorController.getOneAuthor);
    app.put('/api/authors/edit/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
};