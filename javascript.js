
  var quadrados = document.getElementsByClassName("quadrado");
  var setaEsquerda = document.getElementById("seta-esquerda");
  var setaDireita = document.getElementById("seta-direita");
  var indiceAtual = 0;
  for (var i = 0; i < quadrados.length; i++) {
    quadrados[i].addEventListener("mouseover", function() {
      var textoQuadrado = this.getAttribute("data-texto");
      var textoQuadradoElement = this.querySelector(".texto-quadrado");
      textoQuadradoElement.innerHTML = textoQuadrado;
      textoQuadradoElement.style.opacity = "1";
    });
    quadrados[i].addEventListener("mouseout", function() {
      var textoQuadradoElement = this.querySelector(".texto-quadrado");
      textoQuadradoElement.style.opacity = "0";
    });
    quadrados[i].addEventListener("click", function() {
      for (var j = 0; j < quadrados.length; j++) {
        quadrados[j].classList.remove("ativo");
      }
      this.classList.add("ativo");
      indiceAtual = Array.prototype.indexOf.call(quadrados, this);
    });
  }
  setaEsquerda.addEventListener("click", function() {
    for (var j = 0; j < quadrados.length; j++) {
      quadrados[j].classList.remove("ativo");
    }
    indiceAtual--;
    if (indiceAtual < 0) {
      indiceAtual = quadrados.length - 1;
    }
    quadrados[indiceAtual].classList.add("ativo");
  });
  setaDireita.addEventListener("click", function() {
    for (var j = 0; j < quadrados.length; j++) {
      quadrados[j].classList.remove("ativo");
    }
    indiceAtual++;
    if (indiceAtual > quadrados.length - 1) {
      indiceAtual = 0;
    }
    quadrados[indiceAtual].classList.add("ativo");
  });

// Cria uma variável para armazenar o índice da imagem atual
var indiceAtual = 0;

// Cria uma variável para armazenar a distância horizontal
var distancia = 0;

// Cria uma variável para armazenar a largura de cada elemento
var larguraElemento = 270; // você pode mudar esse valor de acordo com o tamanho dos seus elementos

// Cria uma variável para armazenar a largura da página
var larguraPagina = 1906; // você pode mudar esse valor de acordo com o tamanho da sua página

// Cria uma função para mover os elementos
function moverElementos() {
  // Percorre todos os elementos com a classe quadrado
  for (var i = 0; i < quadrados.length; i++) {
    // Calcula a distância que cada elemento deve se mover
    // A distância é igual à metade da diferença entre a largura da página e a largura do elemento, menos o índice vezes a largura do elemento
    distancia = (larguraPagina - larguraElemento) / 2 - indiceAtual * larguraElemento;
    // Aplica a transformação de acordo com a distância
    quadrados[i].style.transform = "translateX(" + distancia + "px)";
  }
}

// Adiciona um evento de clique na seta esquerda
setaEsquerda.addEventListener("click", function() {
  // Diminui o índice em 1
  indiceAtual--;
  // Verifica se o índice é menor que 0
  if (indiceAtual < 0) {
    // Se for, volta para o último elemento
    indiceAtual = quadrados.length - 1;
  }
  // Chama a função para mover os elementos
  moverElementos();
});

// Adiciona um evento de clique na seta direita
setaDireita.addEventListener("click", function() {
  // Aumenta o índice em 1
  indiceAtual++;
  // Verifica se o índice é maior que o número de elementos
  if (indiceAtual > quadrados.length - 1) {
    // Se for, volta para o primeiro elemento
    indiceAtual = 0;
  }
  // Chama a função para mover os elementos
  moverElementos();
});

