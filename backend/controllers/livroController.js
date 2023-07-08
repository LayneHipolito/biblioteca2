const Livro = require('../models/Livro');

class LivroController {
  async getAllLivros(req, res) {
    try {
      const livros = await Livro.find();
      res.json(livros);
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao obter os livros.' });
    }
  }

  async getLivroByISBN(req, res) {
    const isbn = parseInt(req.params.isbn);

    try {
      const livro = await Livro.findOne({ ISBN: isbn });

      if (livro) {
        res.json(livro);
      } else {
        res.status(404).json({ mensagem: 'Livro não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao obter o livro.' });
    }
  }

  async cadastrarLivro(req, res) {
    const novoLivro = req.body;

    try {
      const livro = await Livro.create(novoLivro);
      res.status(201).json({ mensagem: 'Livro cadastrado com sucesso.' });
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao cadastrar o livro.' });
    }
  }

  async atualizarLivro(req, res) {
    const isbn = parseInt(req.params.isbn);
    const camposAtualizados = req.body;

    try {
      const livro = await Livro.findOneAndUpdate({ ISBN: isbn }, camposAtualizados);

      if (livro) {
        res.json({ mensagem: 'Livro atualizado com sucesso.' });
      } else {
        res.status(404).json({ mensagem: 'Livro não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao atualizar o livro.' });
    }
  }

  async deletarLivro(req, res) {
    const isbn = parseInt(req.params.isbn);

    try {
      const livro = await Livro.findOneAndDelete({ ISBN: isbn });

      if (livro) {
        res.json({ mensagem: 'Livro deletado com sucesso.' });
      } else {
        res.status(404).json({ mensagem: 'Livro não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao deletar o livro.' });
    }
  }
}

module.exports = new LivroController();
