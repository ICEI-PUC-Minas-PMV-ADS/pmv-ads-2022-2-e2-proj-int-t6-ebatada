class Fade {
  constructor(fade, modal, botaoAbrir, botaoFechar, botaoFechar2) {
    this.fade = document.querySelector(fade);
    this.modal = document.querySelector(modal);
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.botaoFechar2 = document.querySelector(botaoFechar2);
  }

  renderModal() {
    this.botaoAbrir.addEventListener('click', () => {
      this.fade.classList.add('ativo');
      this.modal.classList.add('ativo');
    });

    this.botaoFechar.addEventListener('click', () => {
      this.fade.classList.remove('ativo');
      this.modal.classList.remove('ativo');
    });

    if (this.botaoFechar2 != null) {
      this.botaoFechar2.addEventListener('click', () => {
        this.fade.classList.remove('ativo');
        this.modal.classList.remove('ativo');
      })
    };
  }
}

const modalNovoPedido = new Fade(".primeiro-fade", ".novo-pedido", ".botao-novo", ".botao-fechar");
modalNovoPedido.renderModal();

const modalNovoCliente = new Fade(".fade-novocliente", ".novo-cliente", ".botao-novo-cliente", ".botao-fechar-novo");
modalNovoCliente.renderModal();

const modalNovoProduto = new Fade(".fade-novo-produto", ".novo-produto", ".botao-novo-produto", ".botao-fechar-produto");
modalNovoProduto.renderModal();

const modalSelecionarTamanho = new Fade(".fade-tamanhos", ".selecione-tamanho", ".adicionar-produto", ".botao-fechar-tamanho", ".botão-adicionar-personalizacao");
modalSelecionarTamanho.renderModal();

const modalPersonalizarPedido = new Fade(".fade-personalizar", ".personalizar-produto", ".botao-selecionar-tamanho", ".botao-fechar-personalizar", ".botão-adicionar-personalizacao");
modalPersonalizarPedido.renderModal();


/*CÓDIGO PARA QUANDO UM CLIENTE É SELECIONADO
const enderecoSelecionado = document.querySelector(".endereco-selecionado");
const enderecoAtual = document.querySelector(".endereco-atual");
const enderecosContainer = document.querySelector(".container-enderecos");
const setaEndereco = document.querySelector(".seta-endereco");
const listaEnderecos = document.querySelectorAll(".endereco");

enderecoSelecionado.addEventListener("click", () => {
  enderecosContainer.classList.toggle("ativo");
  setaEndereco.classList.toggle("ativo");
});

listaEnderecos.forEach(o => {
  o.addEventListener("click", () => {
    enderecoAtual.innerHTML = o.querySelector("label").innerHTML;
    enderecosContainer.classList.remove("ativo");
    setaEndereco.classList.remove("ativo");
  });
});*/


function abrirModal(fade, modal) {
  let fundo = document.querySelector(fade);
  let janela = document.querySelector(modal);

  fundo.classList.add('ativo');
  janela.classList.add('ativo');

};

function fecharModal(fade, modal) {
  let fundo = document.querySelector(fade);
  let janela = document.querySelector(modal);

  fundo.classList.remove('ativo');
  janela.classList.remove('ativo');

};


function renderPedidosCriados() {
  fetch('http://localhost:5000/api/pedidos').then(res => {
    return res.json();
  }).then(json => {
    var pedidos = json;
    console.log(pedidos)
    //Configurando cards 
    let containerPedidos = "";

    for (var p = 0; p < Object.keys(pedidos).length; p++) {
      let abertoEm = new Date(pedidos[p].abertoem);

      let cardPedido =
        `<div class="card">
<div class="info-pedido">
  <div class="id-pedido">
    <h4>#${pedidos[p].idpedido}</h4>
  </div>
  <div class="data-pedido">
    <h4>${abertoEm.getDate()}/${abertoEm.getMonth() + 1}/${abertoEm.getFullYear()}</h4>
  </div>
  <div class="tipo-pedido">
    <h4>${pedidos[p].tipopedido}</h4>
  </div>
  <div class="horas-pedido">
    <h4>${abertoEm.getHours()}:${abertoEm.getMinutes()}</h4>
  </div>
</div>
<div class="info-cliente">
  <img src="./assets/user.svg" alt="Usuário" class="icone-usuario">
  <div class="nome-cliente-card">
    <h4>${pedidos[p].cliente_cliente.nome}</h4>
  </div>
  <div class="pedidos-cliente">
    <p>Número de pedidos: #</p>
  </div>
</div>
<div class="entrega">
  <img src="./assets/marker.svg" alt="Local" class="icone-local">
  <div class="endereco-cliente">
    <p>${pedidos[p].cliente_cliente.rua},${pedidos[p].cliente_cliente.numero},${pedidos[p].cliente_cliente.bairro}</p>
  </div>
</div>
<div class="status">
  <img src="./assets/interrogation.svg" alt="Interrogação" class="icone-interrogacao">
  <div class="status-pedido">
    <h4>Em aberto</h4>
  </div>
  <div class="tempo-entrega">
    <h4>Tempo em aberto:</h4>
  </div>
</div>
<div class="navegacao">
  <button class="botao-finalizar">Finalizar</button>
  <button value="${p}" class="botao-detalhes">Detalhes</button>
</div>
</div>`;
      containerPedidos += cardPedido;

    }



    document.querySelector(".container-cards").innerHTML = containerPedidos;



    //Configurando botão detalhes
    const botoesDetalhes = document.querySelectorAll('.botao-detalhes');

    for (var b = 0; b < botoesDetalhes.length; b++) {
      let botao = botoesDetalhes[b];
      botao.addEventListener('click', () => {
        detalhesPedido(botao.value);
      })

    };








    //Personalizando modals
    function detalhesPedido(i) {
      abrirModal(".primeiro-fade", ".novo-pedido");
      //titulo
      document.querySelector('#titulo-pedido').innerHTML = `Pedido Nº${pedidos[i].idpedido}`;
      //detalhes pedido
      document.querySelector('.numero-pedido').innerHTML = `
          <h4>Pedido Nº${pedidos[i].idpedido}</h4>
          <p>Número Personalizado: ${pedidos[i].numeropersonalizado}</p>
          <div id="tempo-pedido">
            <img src="./assets/clock-white.svg" alt="Relógio">
            <p>00h00min</p>
          </div>
          <button class="botao-excluir">
            <img src="./assets/lixo-white.svg" alt="Lixo">
            <p>Excluir</p>
          </button>
    `;

      //tipo pedido
      if (pedidos[i].tipopedido == 'delivery') {
        document.getElementById("option-1").checked = true;
      }
      else if (pedidos[i].tipopedido == 'balcao') {
        document.getElementById("option-2").checked = true;
      }

      //cliente
      document.querySelector('.cliente-pedido').innerHTML = `
<div id="nome-cliente-pedido">
            <h4>${pedidos[i].cliente_cliente.nome}</h4>
          </div>
          <div id="telefones-cliente">
            <div id="telefone-primario">
              <h4>Telefone primário</h4>
              <p>${pedidos[i].cliente_cliente.telefoneprimario}</p>
            </div>
            <div id="telefone-secundario">
              <h4>Telefone secundário</h4>
              <p>${pedidos[i].cliente_cliente.telefonesecundario}</p>
            </div>
          </div>
          <div id="enderecos-cliente">
            <div class="enderecos-cadastrados">
              <div class="container-enderecos">
                <div class="endereco">
                  <input type="radio" class="radio" id="endereco-primario" name="endereco" />
                  <label for="endereco-primario">
                    <p>Endereço primário</p>
                  </label>
                </div>
                <div class="endereco">
                  <input type="radio" class="radio" id="endereco-secundario" name="endereco" />
                  <label for="endereco-secundario">
                    <p>Endereço secundário</p>
                  </label>
                </div>
              </div>
              <div class="endereco-selecionado">
                <div class="endereco-atual">
                  <p>Endereço principal</p>
                </div>
                <img src="./assets/seta-cinza.svg" alt="" class="seta-endereco">
              </div>
            </div>
            <div id="caixa-endereco">
              <p>${pedidos[i].cliente_cliente.rua},${pedidos[i].cliente_cliente.numero},${pedidos[i].cliente_cliente.bairro}
              </p>
            </div>
          </div>

          <button id="editar-cliente">Editar cliente</button>
          <button id="trocar-cliente">Trocar cliente</button>
`;
      //Produtos
      let containerCarrinho = "";
      for (var c = 0; c < pedidos[i].produtospedidos.length; c++) {
        let itemCarrinho = pedidos[i].produtospedidos[c];

        let linhaTabela



        function tipoProduto() {
          if (itemCarrinho.idproduto_produto.idcategoria_categoria.meioame == true && itemCarrinho.meiomeios.length != 0) {
            if (itemCarrinho.meiomeios[0].segundametade != null) {
              console.log("Pizza 2 sabores")
            }
            else if (itemCarrinho.meiomeios[0].segundoterco != null) {
              console.log("Pizza 3 sabores")
            }
            else if (itemCarrinho.meiomeios[0].segundoquarto != null) {
              console.log("Pizza 4 sabores")
            }

          }

        }

        tipoProduto();
      }










    };









  })
}

renderPedidosCriados();




























/*
let botaoCriarCliente = document.querySelector("#salvar-cliente");
botaoCriarCliente.addEventListener('click', () => {
  let nome = document.querySelector("#nome").value;
  let telefoneprimario = document.querySelector("#telefone-prim").value;
  let telefonesecundario = document.querySelector("#telefone-sec").value;
  let rua = document.querySelector("#nome-rua").value;
  let numero = document.querySelector("#numero-casa").value;
  let bairro = document.querySelector("#bairro").value;
  let complemento = document.querySelector("#complemento-endereco").value;
  let referencia = document.querySelector("#referencia-endereco").value;

  let cliente = { nome, telefoneprimario, telefonesecundario, rua, numero, bairro, complemento, referencia };

  const opcoes = {
    method: "POST",
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(cliente)
  };

  fetch('http://localhost:5000/api/novocliente', opcoes).then(res => {
    console.log(res);
    atualizarClientes();
    document.querySelector("#nome").value = "";
    document.querySelector("#telefone-prim").value = "";
    document.querySelector("#telefone-sec").value = "";
    document.querySelector("#nome-rua").value = "";
    document.querySelector("#numero-casa").value = "";
    document.querySelector("#bairro").value = "";
    document.querySelector("#complemento-endereco").value = "";
    document.querySelector("#referencia-endereco").value = "";
  })
});


document.addEventListener('DOMContentLoaded', atualizarClientes())


function atualizarClientes() {
  fetch('http://localhost:5000/api/clientes').then(res => {
    return res.json();
  }).then(json => {
    let clientes = JSON.parse(json);
    let elementosClientes = "";
    clientes.forEach(cliente => {
      let elementoCliente = `<div class="cliente-encontrado">
      <h4>${cliente.nome}</h1>
        <h4>${cliente.telefoneprimario}</h4>
        <p>${cliente.rua}, ${cliente.numero}, ${cliente.bairro}</p>
    </div>`;
      elementosClientes += elementoCliente;
    })
    document.querySelector("#container-encontrados").innerHTML = elementosClientes;
  })
}




//Renderizar pedidos Criados
function pegarCliente(idCliente) {
  let cliente = "";

  for (var i = 0; i < clientes.length; i++) {
    if (relacaoItemTamanho[i].iditem == idItem) {
      tamanhosItem.push(relacaoItemTamanho[i])
    }
  };

}

pedido.forEach((pedido) => {
  let nomeCliente = "";
  let enderecoCliente = "";



  let card = `
<div class="container-cards">
        <div class="card">
          <div class="info-pedido">
            <div class="id-pedido">
              <h4>#${pedido.idpedido}</h4>
            </div>
            <div class="data-pedido">
              <h4>${pedido.abertoEm.getDay()}/${pedido.abertoEm.getMonth()}/${pedido.abertoEm.getFullYear()}</h4>
            </div>
            <div class="tipo-pedido">
              <h4>${pedido.tipoPedido}</h4>
            </div>
            <div class="horas-pedido">
              <h4>${pedido.abertoEm.getHours()}:${pedido.abertoEm.getMinutes()}</h4>
            </div>
          </div>
          <div class="info-cliente">
            <img src="./assets/user.svg" alt="Usuário" class="icone-usuario">
            <div class="nome-cliente-card">
              <h4>João Lucas Pinheiro</h4>
            </div>
            <div class="pedidos-cliente">
              <p>Número de pedidos: 56</p>
            </div>
          </div>
          <div class="entrega">
            <img src="./assets/marker.svg" alt="Local" class="icone-local">
            <div class="endereco-cliente">
              <p>Avenida Manoel Salvador de Oliveira, 1020, Bela Vista</p>
            </div>
          </div>
          <div class="status">
            <img src="./assets/interrogation.svg" alt="Interrogação" class="icone-interrogacao">
            <div class="status-pedido">
              <h4>Em aberto</h4>
            </div>
            <div class="tempo-entrega">
              <h4>Tempo em aberto: 0h4min</h4>
            </div>
          </div>
          <div class="navegacao">
            <button class="botao-finalizar">Finalizar</button>
            <button class="botao-detalhes">Detalhes</button>
          </div>
        </div>
      </div>
`
})







//Modal tabela de produtos
function tabelaProdutos() {
  const containerProdutos = document.querySelector(".produtos-tabela");
  let produtos = '';

  items.forEach((item) => {
    let produto = `
            <tr>
              <td>${item.codigo}</td>
              <td>${item.nome}</td>
              <td>
                <img src="./assets/adicionar-verde.svg" alt="" class="adicionar-produto">
              </td>
            </tr>
`
    produtos += produto
    containerProdutos.innerHTML = produtos;
  })
};

tabelaProdutos();

//Modal para selecionar o tamanho
function abrirModal(fade, modal) {
  let fundo = document.querySelector(fade);
  let janela = document.querySelector(modal);

  fundo.classList.add('ativo');
  janela.classList.add('ativo');
};


function carregarTamanhos(indexItem) {
  const item = Object.values(items[indexItem]);
  const idItem = item[0];
  const tamanhosItem = [];
  const nomesTamanhos = [];
  const valoresTamanhos = [];
  const nomeValor = [];
  let tamanhosRender = '';
  let tamanhosPersonalição = '';
  const containerTamanhos = document.querySelector(".container-tamanhos");
  const containerNomeProduto = document.querySelector(".nome-produto");
  let nomeProduto = item[1];


  for (var i = 0; i < relacaoItemTamanho.length; i++) {
    if (relacaoItemTamanho[i].iditem == idItem) {
      tamanhosItem.push(relacaoItemTamanho[i])
    }
  };

  for (var a = 0; a < tamanhosItem.length; a++) {
    for (var b = 0; b < tamanhos.length; b++) {
      if (tamanhos[b].idtamanho == tamanhosItem[a].idtamanho) {
        nomesTamanhos.push(tamanhos[b].nome)
      }
    }
  };

  for (var i = 0; i < tamanhosItem.length; i++) {
    valoresTamanhos.push(tamanhosItem[i].valor);
  };

  for (var i = 0; i < nomesTamanhos.length; i++) {
    nomeValor.push({ "idtamanho": tamanhosItem[i].idtamanho, "nome": nomesTamanhos[i], "valor": valoresTamanhos[i] },)
  };

  let contador = 0;

  nomeValor.forEach((item) => {
    contador++
    let tamanhoRender = `
    <input type="radio" name="select-tamanho" class="inputs-tamanhos" id="tamanho-${contador}" value="${item.idtamanho}">
    <label for="tamanho-${contador}" class="tamanho tamanho-${contador}">
      <div class="dot-2"></div>
      <span>${item.nome} - ${item.valor}</span>
    </label>
 `
    tamanhosRender += tamanhoRender;
    containerTamanhos.innerHTML = tamanhosRender;
    containerNomeProduto.innerHTML = nomeProduto;

    /*let tamanhoPersonalização = `
            <input type="radio" id="tamanho${contador}personalizar" name="tamanho" value="${item.idtamanho}">
            <label for="tamanho${contador}-personalizar">${item.nome} - ${item.valor}</label>
    `
  });

}

for (var i = 0; i < items.length; i++) {
  let contador = i;
  const adicionarProduto = document.querySelectorAll(".adicionar-produto");
  adicionarProduto[contador].addEventListener('click', () => {
    abrirModal(".fade-tamanhos", ".selecione-tamanho")
    carregarTamanhos(contador);
    carrinhos.iditem = items[contador].iditem;
  });
};

//Escolhendo o tamanho
const botaoAdicionarTamanho = document.querySelector(".botao-selecionar-tamanho");

botaoAdicionarTamanho.addEventListener('click', () => {
  var radioSelecionado = document.querySelector('input[name="select-tamanho"]:checked').value;
  carrinhos.idtamanho = radioSelecionado;
});



*/

