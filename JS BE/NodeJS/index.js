//File System module requer importação prévia, módulo padrão do Node, já incluso
import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro)
    //Jogar novo Error = objeto padrão do JS
    throw new Error(chalk.red(erro.code));
}


function pegaArquivo(dirFile) {
    // Encode de caracteres
    const encoding = 'utf-8';
    //File System Read File para ler um arquivo externo que será passado como argumento em forma de diretório
    fs.readFile(dirFile, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.greenBright(texto))
    })

}

//Certo
//pegaArquivo('./arquivos/texto.md')
//Errado
//pegaArquivo('./arquivos/')

//.then/.catch para escrever diretamente como assincrono
function novaArquivo(caminhoArq) {
    const encoding = 'utf-8';
    //fs Promises API assíncrona
    fs.promises.readFile(caminhoArq, encoding)
        //"então" retorna uma Promise, tem dois parametros: sucesso e fracasso
        .then((textoNova) => console.log(chalk.green(textoNova)))
        //Retorna Promise, lida apenas com FRACASSO
        .catch(trataErro)
}

//novaArquivo('./arquivos/texto.md')



// async/await para converter código sincrono em assincrono
//async avisa que a função é assincrona
async function pegaAsync(arqAsync) {
    try {
        const encoding = 'utf-8';
        //await é a função que será aguardada pelo async 
        const textoInteiro = await fs.promises.readFile(arqAsync, encoding)
        console.log(extraiLinks(textoInteiro))
    } catch (erro) {
        trataErro(erro)
    } finally {
        console.log('Operação Finalizada.')
    }
}

//pegaAsync('./arquivos/texto.md')
//pegaAsync('./arquivos/texto.m')

function extraiLinks(textoInteiro) {
    //expressão regular é passada entre barras normais
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...textoInteiro.matchAll(regex)];
    const resultados = capturas.map(captura => ({ [captura[1]]: captura[2] }));
    return resultados;
}

pegaAsync('./arquivos/texto.md')
