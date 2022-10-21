import chalk from "chalk";
import fs from 'fs';
import pegaAsync from "./index.js";

const caminho = process.argv;


async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaAsync(caminho[2]);
        console.log(chalk.yellow("Lista de Links:"), resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
        console.log(chalk.yellow(arquivos));
    }
}

processaTexto(caminho)