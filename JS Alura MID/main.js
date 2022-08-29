function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === 'audio') {
    elemento.play();
  } else {
    console.log('Elemento ou seletor não encontrados!');
  }
}

const listaDeTecla = document.querySelectorAll('.tecla');

// for ([inicialização]; [condição]; [expressão final])
// declaração

for (let contador = 0; contador < listaDeTecla.length; contador++) {
  const tecla = listaDeTecla[contador];

  const instrumento = tecla.classList[1];

  // $ === template string;
  const idAudio = `#som_${instrumento}`;

  // function() === ()=>  (arrow function);
  tecla.onclick = () => {
    tocaSom(idAudio);
  };

  // == compara somente os valores, enquanto === compara os valores e o tipo (number, text, etc)
  tecla.onkeydown = (evento) => {
    if (evento.code == 'Space' || evento.code == 'Space') {
      tecla.classList.add('ativa');
    }
  };

  tecla.onkeyup = () => {
    tecla.classList.remove('ativa');
  };
}

/* while === enquanto (depende de uma condição de verdadeiro ou falso);
while (contador < listaDeTecla.length) {
  const tecla = listaDeTecla[contador];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = () => {
    tocaSom(idAudio);
  };

  contador = contador + 1;
}
*/
