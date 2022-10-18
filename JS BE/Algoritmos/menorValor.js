
const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;

  for (let iAtual = posicaoInicial; iAtual < arrProdutos.length; iAtual++) {
    if (arrProdutos[iAtual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = iAtual;
    }
  }
  return maisBarato;
}

module.exports = menorValor;