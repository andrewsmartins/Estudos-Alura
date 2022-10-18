//Importa o código da lista
const livros = require('./listaLivros');

let iBarato = 0;
let iCaro = 0;

for (let i = 0; i < livros.length; i++) {
  if (livros[i].preco < livros[iBarato].preco) {
    iBarato = i
  }
  if (livros[i].preco > livros[iCaro].preco) {
    iCaro = i
  }
}

console.log(`O livro mais barato custa ${livros[iBarato].preco} e o título é ${livros[iBarato].titulo}.
E o livro mais caro custa ${livros[iCaro].preco} e o título é ${livros[iCaro].titulo}.`)
