import chalk from "chalk";
import fs from 'fs';
import pegaAsync from "./index.js";
import listaValidada from "./htttp-valida.js";

const caminho = process.argv;

function imprimeLista(valida, resultado, identificador = '') {
    if (valida) {
        console.log(
            chalk.yellow('Lista Validada'),
            chalk.blackBright.bgGreen(identificador),
            listaValidada(resultado));
    } else {
        console.log(
            chalk.yellow('Lista de Links'),
            chalk.blackBright.bgGreen(identificador),
            resultado);
    }
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    //Verifica se o indice 3 de argumentos é exatamente igual a '--valida', retornando boolean
    const valida = argumentos[3] === '--valida';

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if (erro.code === "ENOENT") {
            console.log(chalk.green("Arquivo ou diretório não existe"))
            return;
        }
    }
    //File system       "é arquivo?" = boolean (.isFile)
    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaAsync(argumentos[2]);
        imprimeLista(valida, resultado);
        //File system       "é diretório?" = boolean (.isDirectory)
    } else if (fs.lstatSync(caminho).isDirectory()) {
        //File system       "ler diretório"(diretório a ser lido) (.readdir) 
        const arquivos = await fs.promises.readdir(caminho)
        //Por estar dentro de uma função, é preciso avisar que ela também é assincrona
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaAsync(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(valida, lista, nomeDeArquivo)
        })
    }
}

processaTexto(caminho)