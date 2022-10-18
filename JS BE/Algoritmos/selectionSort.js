const livros = require('./listaLivros');
const menorValor = require('./menorValor');

// 1
for (let iAtual = 0; iAtual < livros.length - 1; iAtual++) {
    //Chama a função menorValor com os parametros: livros e atual    
    let menor = menorValor(livros, iAtual)

    let livroAtual = livros[iAtual];
    console.log('posição atual', iAtual)
    console.log('livro atual', livros[iAtual])
    let livroMenorPreco = livros[menor];
    console.log('livro menor preço', livros[menor])

    livros[iAtual] = livroMenorPreco
    livros[menor] = livroAtual
}
