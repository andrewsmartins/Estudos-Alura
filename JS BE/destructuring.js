const numPares = [2, 4, 6];
const numImpares = [1, 3, 5];

//Soma os arrays em um array e array
const nums = [numPares, numImpares];
console.log(nums);
//Resultado: [ [ 2, 4, 6 ], [ 1, 3, 5 ] ]

//Espalha, abre o array e tras todos os elementos
const nums2 = [...numPares, ...numImpares];
console.log(nums2);
//Resultado: [ 2, 4, 6, 1, 3, 5 ]

//Declarar:
const num1 = 1;
const num2 = 2;

//É o mesmo que:
const [numA, numB] = [1, 2];

//Usar o operador de espalhamento fará buscar todos os elementos restantes
const [numero1, numero2, ...outrosNumeros] = [1, 2, 3, 4, 5, 6];
console.log(numero1, numero2, outrosNumeros);
//Resultado: 1 2 [ 3, 4, 5, 6 ]

//Pode-se declarar um valor de partida dentro do nome
const [nome1 = 'Andy'] = [1];
console.log(nome1);
//Resultado: 1

const [nome2 = 'Andy'] = [];
console.log(nome2);
//Resultado: Andy

const pessoa = {
  nome: 'Andy',
  idade: 30,
};
console.log(pessoa);

//Sem espalhamento irá trazer o objeto inteiro
const pessoaFone1 = {
  pessoa,
  telefone: 48999999999,
};
console.log(pessoaFone1);
//Resultado: { pessoa: { nome: 'Andy', idade: 30 }, telefone: 48999999999 }

//Com espalhamento juntará em um novo array
const pessoaFone2 = {
  ...pessoa,
  telefone: 48999999999,
};
console.log(pessoaFone2);
//Resultado: { nome: 'Andy', idade: 30, telefone: 48999999999 }

//Forma comum, usando notação de ponto
const nomePessoa = pessoa.nome;
console.log(nomePessoa);
//Resultado: 'Andy'

//Aplicando destructuring, busca o primeiro campo dentro do objeto que corresponda
const { nome } = pessoa;
console.log(nome);
//Resultado: 'Andy'

//Trás o objeto inteiro
function imprimeDados1(dados1) {
  console.log(dados1);
}
imprimeDados1(pessoaFone2);
//Resultado: { nome: 'Andy', idade: 30, telefone: 48999999999 }

//Escolhe determinados campos dentro do objeto (nome, idade)
function imprimeDados2(dados2) {
  const { nome, idade } = dados2;
  console.log(nome, idade);
}
imprimeDados2(pessoaFone2);
//Resultado: Andy 30

//Aplicando destructuring, forma mais simplificada
function imprimeDados3({ nome, idade }) {
  console.log(nome, idade);
}
imprimeDados3(pessoaFone2);
//Resultado: Andy 30
