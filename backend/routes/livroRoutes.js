const express = require('express');
const LivroController = require('./livroController');

const router = express.Router();

// Rotas para os livros
router.get('/livros', LivroController.getAllLivros);
router.get('/livros/:isbn', LivroController.getLivroByISBN);
router.post('/livros/cadastrar', LivroController.cadastrarLivro);
router.put('/livros/atualizar/:isbn', LivroController.atualizarLivro);
router.delete('/livros/deletar/:isbn', LivroController.deletarLivro);

module.exports = router;
