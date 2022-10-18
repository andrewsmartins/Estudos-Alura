const livros = require('./listaLivros');

function insertionSort(lista) {

    for (let i = 1; i < lista.length; i++) {
        let iLista = i;
        while (iLista > 0 && lista[iLista].preco < lista[iLista - 1].preco) {
            let itemAnalise = lista[iLista];
            let itemAnterior = lista[iLista - 1];

            lista[iLista] = itemAnterior
            lista[iLista - 1] = itemAnalise

            iLista--
        }
    }
    console.log(lista);
}

insertionSort(livros);