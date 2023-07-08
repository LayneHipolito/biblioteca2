const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  ISBN: {
    type: Number,
    required: true,
    unique: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  anoPublicacao: {
    type: Number,
    required: true,
  },
  tema: {
    type: String,
    required: true,
  },
  alugado: {
    type: Boolean,
    default: false,
  },
});

const Livro = mongoose.model('Livro', livroSchema);

module.exports = Livro;
