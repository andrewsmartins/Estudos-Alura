const listaCPFs = ['12365242625', '9242624265', '9352524652'];

// const cliente = ["nome","André","idade",36]

const cliente1 = {
  nome: 'Andre',
  idade: 36,
  cpf: '12543652266',
  email: 'andre@email.com',
};

//Notação de ponto
console.log(`Meu nome é ${cliente1.nome} e tenho ${cliente1.idade} anos.`);

//Selecionar parte da string (.substring)
//                       (i inicial, i final)
console.log(cliente1.cpf.substring(0, 3));

//Notação de colchete
const chaves = ['nome', 'idade', 'cpf', 'email'];
console.log(`Seu email é: ${cliente1[chaves[3]]}`);

//Imprime todos os campos
chaves.forEach((info) => console.log(cliente1[info]));

//Adicionar campo
console.log(cliente1);
cliente1.fone = '9242525252';

//Substituir valor do campo
console.log(cliente1);
cliente1.fone = '875254554';
console.log(cliente1);

//Remover campo
delete cliente1.fone;
console.log(cliente1);

//Campo com multiplos dados, array
const cliente2 = {
  nome: 'Andre Silva',
  idade: 36,
  cpf: '12543652266',
  email: 'andre@email.com',
  fones: ['5591235498', '5521988743124'],
};

cliente2.fones.forEach((fone) => console.log(fone));

//Adicionar objeto ao objeto
cliente2.dependentes = {
  nome: 'Sara',
  parentesco: 'filha',
  dataNasc: '20/03/2011',
};

console.log(cliente2);

//Consultar objeto dentro do objeto (notação de ponto)
cliente2.dependentes.nome = 'Sara Silva';
console.log(cliente2);

//Lista de Objetos
const cliente3 = {
  nome: 'Andre',
  idade: 36,
  cpf: '12543652266',
  email: 'andre@email.com',
  fones: ['5591235498', '5521988743124'],
  //Torna o objeto em um array (colchetes)
  dependentes: [
    {
      nome: 'Sara Silva',
      parentesco: 'filha',
      dataNasc: '20/03/2011',
    },
  ],
};

//Adicionar objeto ao ultimo indice do array (.push)
cliente3.dependentes.push({
  nome: 'Samia Maria',
  parentesco: 'filha',
  dataNasc: '04/01/2014',
});

console.log(cliente3);
console.log(`Seu nome é: ${cliente3.dependentes[1].nome}`);

//Funções servem para dar comportamentos ao objeto
const cliente4 = {
  nome: 'Andre',
  idade: 36,
  cpf: '12543652266',
  email: 'andre@email.com',
  fones: ['5591235498', '5521988743124'],
  dependentes: [
    {
      nome: 'Sara Silva',
      parentesco: 'filha',
      dataNasc: '20/03/2011',
    },
    {
      nome: 'Samia Maria',
      parentesco: 'filha',
      dataNasc: '04/01/2014',
    },
  ],
  saldo: 100,
  //Função dentro do objeto = Método
  depositar: function (valor) {
    //this = refere-se ao próprio objeto
    this.saldo += valor;
  },
};
console.log(cliente4.saldo);

//Executa a função
cliente4.depositar(30);
console.log(cliente4.saldo);

//For ... In
//Loop para objetos e arrays
let relatorio = '';

//Variável info atuará dentro do objeto cliente4
for (let info in cliente4) {
  if (
    typeof cliente4[info] === 'object' ||
    typeof cliente4[info] === 'function'
  ) {
    continue;
  } else {
    relatorio += `${info} ==> ${cliente4[info]}
`;
  }
}
console.log(relatorio);

//Listar campos do objeto (.Object.keys)
const propsClientes = Object.keys(cliente4);
console.log(propsClientes);

//
function oferecerSeguro(obj) {
  const propsClientes2 = Object.keys(obj);
  //Verificar se existe no array (.includes)
  if (propsClientes2.includes('dependentes')) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  }
}
oferecerSeguro(cliente4);

//Listar valores dos campos do objeto (.Object.values)
console.log(Object.values(cliente4));

//Listar chaves e valores (Object.entries)
console.log(Object.entries(cliente4));

const clientes5 = [
  {
    nome: 'André',
    cpf: '12312312312',
    dependentes: [
      {
        nome: 'Sara',
        parentesco: 'filha',
        dataNasc: '20/03/2011',
      },
      {
        nome: 'Samia',
        parentesco: 'filha',
        dataNasc: '04/01/2014',
      },
    ],
  },
  {
    nome: 'Juliana',
    cpf: '56767867867',
    dependentes: [
      {
        nome: 'Sophia',
        parentesco: 'filha',
        dataNasc: '30/08/2020',
      },
    ],
  },
];
console.log(`
------------x------------
`);

//Operador de espalhamento
//Adiciona todos os elementos do array (...)
const listaDependentes = [
  ...clientes5[0].dependentes,
  ...clientes5[1].dependentes,
];

//Exibir em tabela (.table)
console.table(listaDependentes);

//Prototype: mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros (__proto__)
//Guarda as definições de todo objeto. Mostra as propriedades e os métodos encontrados na cadeia de protótipos do objeto

class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  exibirSaldo() {
    console.log(this.saldo);
  }
}

//extends: cria classe filha
class ClientePoupanca extends Cliente {
  //constructor: criar e construir instancia de um objeto da classe
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    //super: aessar classe/objeto pai e trazer os argumentos (arg1, arg2, etc)
    super(nome, email, cpf, saldo);
    //this.: faz referencia ao próprio objeto/classe
    this.saldoPoupanca = saldoPoupanca;
  }

  depositarPoupanca(valor) {
    this.saldoPoupanca += valor;
  }
}

const andre = new ClientePoupanca(
  'Andre',
  'a@email.com',
  '2255887744',
  100,
  200
);

console.log(andre);

andre.depositar(50);
andre.depositarPoupanca(50);

console.log(andre);
