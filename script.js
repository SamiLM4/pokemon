var carta1 = {
  nome: "Venusaur",
  imagem: "https://i.gifer.com/8BPe.gif",
  atributos: {
    ataque: 90,
    defesa: 160,
  }
};
var carta2 = {
  nome: "Pikachu",
  imagem: "https://thumbs.gfycat.com/BlackOffbeatBufeo-size_restricted.gif",
  atributos: {
    ataque: 80,
    defesa: 140,
  }
};
var carta3 = {
  nome: "Charizard",
  imagem: "https://media0.giphy.com/media/YS5znaiKtMk16yKqqs/giphy.gif",
  atributos: {
    ataque: 130,
    defesa: 160,
  }
};
var carta4 = {
  nome: "Blastoise",
  imagem: "https://media4.giphy.com/media/tDT5nL8EXbQhW/giphy.gif",
  atributos: {
    ataque: 150,
    defesa: 160,
  }
};
var carta5 = {
  nome: "Greninja",
  imagem: "https://media0.giphy.com/media/12BtgqzcTMNrmE/giphy.gif",
  atributos: {
    ataque: 120,
    defesa: 130,
  }
};
var carta6 = {
  nome: "Delphox",
  imagem: "https://c.tenor.com/K2pd-Wk2wQEAAAAM/delphox-flame.gif",
  atributos: {
    ataque: 110,
    defesa: 140,
  }
};
var carta7 = {
  nome: "Chesnaught",
  imagem: "https://pa1.narvii.com/6831/1b56fcc10d9d09867159ddf2fa744774f4623c27_hq.gif",
  atributos: {
    ataque: 90,
    defesa: 180,
  }
};
var carta8 = {
  nome: "Mewtwo",
  imagem: "https://thumbs.gfycat.com/BelatedSlightBrownbutterfly-max-1mb.gif",
  atributos: {
    ataque: 170,
    defesa: 180,
  }
};
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];
var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 7);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartajogador = parseInt(Math.random() * 7);
  while (numeroCartaMaquina == numeroCartajogador) {
    numeroCartajogador = parseInt(Math.random() * 7);
  }
  cartaJogador = cartas[numeroCartajogador];
  console.log(cartaJogador);
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu </p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu </p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empate </p>";
  }

  htmlResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina()

  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "você Venceu !!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "você Perdeu";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }
  console.log(valorCartaMaquina);
}
function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  //  divCartaJogador.style.backgroundImage= "url (" + catrtaJogador.imagem + ")"

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'> ";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}


function exibirCartaMaquina() {
   var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  //  divCartaJogador.style.backgroundImage= "url (" + catrtaMaquina.imagem + ")"

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'> ";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"; }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
