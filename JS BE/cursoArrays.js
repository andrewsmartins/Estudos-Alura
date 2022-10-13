//médias: 10, 6.5, 8, 7.5
let nota1 = 10;
let nota2 = 6.5;
let nota3 = 8;
let nota4 = 7.5;

let media1 = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(`Média 1: ${media1}`);

//Array
const notas2 = [10, 6.5, 8, 7.5];
let media2 = (notas2[0] + notas2[1] + notas2[2] + notas2[3]) / notas2.length;
console.log(`Média 2: ${media2}`);

//Adicionar elemento (.push)
const notas3 = [10, 6.5, 8];
notas3.push(7.5);
console.log(`Notas 2: ${notas3}`);

let media3 = (notas3[0] + notas3[1] + notas3[2] + notas3[3]) / notas3.length;
console.log(`Média 3: ${media3}`);

//Remover elemento (.pop)
const notas4 = [10, 6.5, 8, 7.5, 10];
notas4.pop();
console.log(`Notas 4: ${notas4}`);

let media4 = (notas4[0] + notas4[1] + notas4[2] + notas4[3]) / notas4.length;
console.log(`Média 4: ${media4}`);

//Dividir array (.slice)
//Ordenar array (.sort)
const nomes = [
  'João',
  'Juliana',
  'Ana',
  'Caio',
  'Lara',
  'Marjorie',
  'Guilherme',
  'Aline',
  'Fabiana',
  'Andre',
  'Carlos',
  'Paulo',
  'Bia',
  'Vivian',
  'Isabela',
  'Vinícius',
  'Renan',
  'Renata',
  'Daisy',
  'Camilo',
];

//                 .slice(inicio, fim)
const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2);

console.log(`Alunos da sala 1: ${sala1.sort()}`);
console.log(`Alunos da sala 2: ${sala2.sort()}`);
console.log(`...`);
console.log(`...`);

//Alterar array (.splice)
const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
//.splice(indice inicio, quantidade de elementos a remover, "elemento novo 1", "elemento novo 2", ...etc)
listaDeChamada.splice(2, 3, 'Rodrigo', 'Marcos');

console.log(`Lista de chamada: ${listaDeChamada}`);

//Juntar arrays (.concat)
const salaDePython = ['Melissa', 'Helena', 'Rodrigo'];
const salaDeJavaScript = ['Ju', 'Leo', 'Raquel'];
const salasUnificadas = salaDePython.concat(salaDeJavaScript);
console.log(salasUnificadas);

//Lista 2 dimensões
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];
const cursoDosAlunos = [
  'Medicina',
  'Engenharia Florestal',
  'Mecatronica',
  'Administração',
];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos, cursoDosAlunos];

console.log(
  `${listaDeNotasEAlunos[0][1]}, sua média é ${listaDeNotasEAlunos[1][1]}, no curso de ${listaDeNotasEAlunos[2][1]}`
);

//Localizando Aluno
const alunos2 = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos2 = [10, 7, 9, 6];

let listaDeNotasEAlunos2 = [alunos2, mediasDosAlunos2];

//Busca no conteúdo do array (.includes)
//Retorna o índice do elemento (.indexOf)
const exibeNomeNota = function (nomeDoAluno) {
  if (listaDeNotasEAlunos2[0].includes(nomeDoAluno)) {
    i = listaDeNotasEAlunos2[0].indexOf(nomeDoAluno);
    return (
      listaDeNotasEAlunos2[0][i] + ', sua média é ' + listaDeNotasEAlunos2[1][i]
    );
  } else {
    return 'Aluno ' + nomeDoAluno + ' não cadastrado.';
  }
};

console.log(exibeNomeNota('Ana'));
console.log(exibeNomeNota('José'));

//Localizando Curso
const alunos3 = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos3 = [10, 7, 9, 6];
const cursoDosAlunos3 = [
  'Medicina',
  'Engenharia Florestal',
  'Mecatronica',
  'Administração',
];

let listaDeAlunos3 = [alunos3, mediasDosAlunos3, cursoDosAlunos3];

const exibeCurso = (curso) => {
  if (listaDeAlunos3[2].includes(curso)) {
    i = listaDeAlunos3[2].indexOf(curso);
    return listaDeAlunos3[0][i] + ', seu curso é ' + listaDeAlunos3[2][i];
  } else {
    return 'Curso não encontrado: ' + curso;
  }
};

console.log(exibeCurso('Administração'));
console.log(exibeCurso('Enfermagem'));

//Criar Loop (for)
//for ([ponto de partida]; [condição]; [expressão final])
//Condição retorna boolean, declaração é executada enquanto condição for verdadeiro

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numeros.length; i++) {
  console.log(`${numeros[i]} é o valor do índice ${i}`);
}

//Média com for
const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
  console.log(somaDasNotas);
}

let media = somaDasNotas / notas.length;
console.log(media);

//Função callback em cada elemento do array (.forEach)
const notas5 = [9, 7.5, 5, 0.5];
let somaDasNotas5 = 0;

notas5.forEach((nota5) => {
  somaDasNotas5 += nota5;
  console.log(somaDasNotas5);
});

let media5 = somaDasNotas5 / notas5.length;

console.log(media5);

//Função callback retornando novo array (.map)
const notas6 = [10, 9, 8, 7, 6];
const notasAtualizadas6 = notas6.map((nota6) =>
  //if(oculto)?=então :=else
  nota6 == 10 ? nota6 : ++nota6
);

console.log(notasAtualizadas6);

//Função callback retornando novo array FULL
const notas7 = [7, 10, 8, 5, 2, 7.5];
const notasAtualizadas7 = notas7.map(function (nota7) {
  if (nota7 == 10) {
    return nota7;
  } else {
    return ++nota7;
  }
});

console.log(notasAtualizadas7);

//Padronizar arrays p/ maiúsculo (.toUpperCase)
let nomes2 = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesAtualizados = nomes2.map((nome2) => nome2.toUpperCase());

console.log(nomesAtualizados);

//Filtrar array (.filter)
const nomes3 = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas8 = [7, 4.5, 8, 7.5];

const reprovados = nomes3.filter((_, i) => notas8[i] < 8);

console.log(`reprovados: ${reprovados}`);

//Função em cada elemento do array, retornando um único valor (.reduce)
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {
  return (
    notasDaSala.reduce((acum, atual) => atual + acum, 0) / notasDaSala.length
  );
}

console.log(`Média da sala JavaScript ${mediaSala(salaJS)}`);
console.log(`Média da sala Java ${mediaSala(salaJava)}`);
console.log(`Média da sala Python ${mediaSala(salaPython)}`);

//Média com .reduce
const notas9 = [10, 6.5, 8, 7];

const media6 = notas9.reduce((acum, atual) => atual + acum, 0) / notas9.length;

console.log(media6);
