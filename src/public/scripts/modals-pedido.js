

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
//modalSelecionarTamanho.renderModal();

const modalPersonalizarPedido = new Fade(".fade-personalizar", ".personalizar-produto", ".botao-selecionar-tamanho", ".botao-fechar-personalizar", ".botão-adicionar-personalizacao");
//modalPersonalizarPedido.renderModal();


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

function criarNovoPedido() {
  document.querySelector('.botao-novo').addEventListener('click', () => {
    document.querySelector('.novo-pedido').innerHTML = `

    <div class="titulo-novo">
      <h2 id="titulo-pedido">Novo pedido</h2>
      <button class="botao-fechar">
        <img src="./assets/fechar-branco.svg" alt="Fechar" class="icone-fechar">
      </button>
    </div>

    <div class="container-criacao">
      <div class="numero-pedido">
        <h4>Novo pedido</h4>
        <p>Número Personalizado: </p>
        <div id="tempo-pedido">
          <img src="./assets/clock-white.svg" alt="Relógio">
          <p>00h00min</p>
        </div>
        <button class="botao-excluir">
          <img src="./assets/lixo-white.svg" alt="Lixo">
          <p>Excluir</p>
        </button>

      </div>
      <div class="tipos-pedido">
        <h4>Tipo de pedido:</h4>
        <div class="wrapper">
          <input type="radio" name="select" id="option-1" checked>
          <input type="radio" name="select" id="option-2">
          <label for="option-1" class="option option-1">
            <div class="dot"></div>
            <span>Delivery</span>
          </label>
          <label for="option-2" class="option option-2">
            <div class="dot"></div>
            <span>Retirada no Balcão</span>
          </label>
        </div>
      </div>
      <div class="taxa-entrega">

      </div>
      <div class="produtos-pedido">
        <button class="botao-novo-produto">Novo produto</button>
        <div class="carrinho-produtos">
          <table class="tabela-carrinho">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Qnt.</th>
                <th>Preço unit.</th>
                <th>Subtotal</th>
                <th>Ações</th>
              </tr>
            </thead>            
          </table>
        </div>

      </div>
      <div class="botoes-pedido">

      </div>
      <div class="cliente-pedido">
        <div id="nome-cliente-pedido">
          <h4>Cliente</h4>
          <h4>(Nenhum cliente selecionado)</h4>
        </div>
        <div class="pesquisa-cliente">
          <img src="./assets/search-orange.svg" id="icone-lupa" alt="Lupa">
          <input type="text" class="texto-busca-cliente" placeholder="Buscar cliente por telefone" />
        </div>
        <div id="container-encontrados">
        
        </div>
        <button class="botao-novo-cliente">Novo cliente</button>
        <button id="trocar-cliente">Pesquisa avançada</button>     
      </div>
      <div class="observacao-pedido">
      </div>
    </div>`


    detalhesPedido(null);
  })
}
criarNovoPedido();



let novoPedido = [{
  "numeropersonalizado": null,
  "tipopedido": null,
  "cliente": null,
  "taxaentrega": null,
  "observacoes": null
}];

let pedidosRenderizados = [];
let produtoEditado = {};
let produtoBd = []
let clientesBd = []

function novoCliente(idPedido) {
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

      document.querySelector("#nome").value = "";
      document.querySelector("#telefone-prim").value = "";
      document.querySelector("#telefone-sec").value = "";
      document.querySelector("#nome-rua").value = "";
      document.querySelector("#numero-casa").value = "";
      document.querySelector("#bairro").value = "";
      document.querySelector("#complemento-endereco").value = "";
      document.querySelector("#referencia-endereco").value = "";

      return res.json()
    }).then(json => {
      trocarClientePedido(idPedido, json.cliente.id)
    })
  });
}

function trocarClientePedido(idPedido, idCliente) {

  const requisicao = {
    idpedido: idPedido,
    idcliente: idCliente
  }

  const opcoes = {
    method: "PUT",
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(requisicao)
  };

  console.log(requisicao)

  fetch('http://localhost:5000/api/trocarclientepedido', opcoes).then(res => {

    return res.json()

  }).then(json => {
    pedidosRenderizados = json.pedidos
    renderizarClientes(json.requisicao.idpedido)
  })
}

function uparProdutoEditado() {

  const opcoes = {
    method: "PUT",
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(produtoEditado)
  };



  fetch('http://localhost:5000/api/editarprodutocarrinho', opcoes).then(res => {


    return res.json()

  }).then(json => {
    fecharModal(".fade-personalizar", ".personalizar-produto");
    pedidosRenderizados = json.pedidos
    renderCarrinho(json.requisicao.idpedido)


  })
}

function adicionarProdutoBD() {

  const opcoes = {
    method: "POST",
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(novoProduto)
  };

  

  fetch('http://localhost:5000/api/adicionarproduto', opcoes).then(res => {



    return res.json()

  }).then(json => {
    pedidosRenderizados = json.pedidos
    renderCarrinho(json.requisicao.idpedido)
    fecharModal(".fade-personalizar", ".personalizar-produto");
    fecharModal(".fade-tamanhos", ".selecione-tamanho");
    fecharModal(".fade-novo-produto", ".novo-produto");

  })
}

function excluirProdutoCarrinho(idProdutoCarrinho, idPedido) {
  const requisicao = {
    idprodutocarrinho: idProdutoCarrinho,
    idpedido: idPedido
  }

  const opcoes = {
    method: "DELETE",
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(requisicao)
  };

  console.log(requisicao)

  fetch('http://localhost:5000/api/excluirproduto', opcoes).then(res => {



    return res.json()

  }).then(json => {
    pedidosRenderizados = json.pedidos
    renderCarrinho(json.requisicao.idpedido)
  })
}

function carregarClientes() {
  fetch('http://localhost:5000/api/clientes').then(res => {
    return res.json();
  }).then(json => {
    clientesBd = json

  })
}

function carregarPedidos() {
  fetch('http://localhost:5000/api/pedidos').then(res => {
    return res.json();
  }).then(json => {

    pedidosRenderizados = json;
    renderPedidosCriados();
  })
}

function renderPedidosCriados() {
  //Configurando cards 
  let containerPedidos = "";

  for (var p = 0; p < Object.keys(pedidosRenderizados).length; p++) {
    let abertoEm = new Date(pedidosRenderizados[p].abertoem);

    let cardPedido =
      `<div class="card">
<div class="info-pedido">
  <div class="id-pedido">
    <h4>#${pedidosRenderizados[p].idpedido}</h4>
  </div>
  <div class="data-pedido">
    <h4>${abertoEm.getDate()}/${abertoEm.getMonth() + 1}/${abertoEm.getFullYear()}</h4>
  </div>
  <div class="tipo-pedido">
    <h4>${pedidosRenderizados[p].tipopedido}</h4>
  </div>
  <div class="horas-pedido">
    <h4>${abertoEm.getHours()}:${abertoEm.getMinutes()}</h4>
  </div>
</div>
<div class="info-cliente">
  <img src="./assets/user.svg" alt="Usuário" class="icone-usuario">
  <div class="nome-cliente-card">
    <h4>${pedidosRenderizados[p].cliente_cliente.nome}</h4>
  </div>
  <div class="pedidos-cliente">
    <p>Número de pedidos: #</p>
  </div>
</div>
<div class="entrega">
  <img src="./assets/marker.svg" alt="Local" class="icone-local">
  <div class="endereco-cliente">
    <p>${pedidosRenderizados[p].cliente_cliente.rua},${pedidosRenderizados[p].cliente_cliente.numero},${pedidosRenderizados[p].cliente_cliente.bairro}</p>
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
  <button value="${pedidosRenderizados[p].idpedido}" class="botao-detalhes">Detalhes</button>
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

}

//Buscando produtos do banco de dados
function carregarProdutos() {
  return fetch('http://localhost:5000/api/produtos').then(res => {
    return res.json();
  }).then(json => {
    const produtosBd = json;
    produtoBd = produtosBd



  })
}

// Adcionar novo produto ao carrinho
let novoProduto = {
  "idpedido": null,
  "idprodutopedido": null,
  "idtamanhopedido": null,
  "quantidade": 1,
  "meiomeios": []
}

function adicionarProdutoCarrinho(idpedido) {
  //Ordem de execução da função
  let ordemExecucaoTamanhos = new Promise(() => {
    carregarProdutos();
  })

  ordemExecucaoTamanhos.then(carregarTamanhos());

  novoProduto.idpedido = idpedido


  function carregarProdutos() {
    const containerProdutos = document.querySelector(".produtos-tabela");
    let produtos = '';
    for (p = 0; p < produtoBd.length; p++) {
      let produto =
        `<tr>
          <td>${produtoBd[p].codigo}</td>
          <td>${produtoBd[p].nome}</td>
          <td>
            <button value="${produtoBd[p].idproduto}" class="adicionar-produto"> <img src="./assets/adicionar-verde.svg" alt=""> </button>
          </td>
        </tr>`
      produtos += produto
      containerProdutos.innerHTML = produtos;
    }

  }



  function carregarTamanhos() {
    for (var i = 0; i < produtoBd.length; i++) {
      let tamanhosRender = '';
      const containerTamanhos = document.querySelector(".container-tamanhos");
      const containerNomeProduto = document.querySelector(".nome-produto");
      const tamanhos = produtoBd[i].idtamanhorelacao_tamanhos;
      const nomeProduto = produtoBd[i].nome;
      const idProduto = produtoBd[i].idproduto;
      let contador = i;



      const adicionarProduto = document.querySelectorAll(".adicionar-produto");
      adicionarProduto[contador].addEventListener('click', () => {
        abrirModal(".fade-tamanhos", ".selecione-tamanho");

        novoProduto.idprodutopedido = idProduto;

        for (var o = 0; o < tamanhos.length; o++) {
          const tamanho = tamanhos[o];
          let contadorTamanhos = o + 1;

          let tamanhoRender = `
              <input type="radio" name="select-tamanho" class="inputs-tamanhos" id="tamanho-${contadorTamanhos}" value="${tamanho.idtamanho}">
              <label for="tamanho-${contadorTamanhos}" class="tamanho tamanho-${contadorTamanhos}">
                <div class="dot-2"></div>
                <span>${tamanho.nome} - ${tamanho.relacaoprodutotamanho.valor}</span>
              </label>
           `
          tamanhosRender += tamanhoRender;
          containerTamanhos.innerHTML = tamanhosRender;
          containerNomeProduto.innerHTML = nomeProduto;

        }
      });
      document.querySelector('.botao-fechar-tamanho').addEventListener('click', () => {
        fecharModal(".fade-tamanhos", ".selecione-tamanho")
        tamanhosRender = ""
      })

    };

  };

  //Selecionando o tamanho e abrindo a modal de personalizar

  const botaoSelecionarTamanho = document.querySelector('.botao-selecionar-tamanho');
  botaoSelecionarTamanho.addEventListener('click', () => {
    const inputsTamanhos = document.querySelectorAll('.inputs-tamanhos');
    for (i = 0; i < inputsTamanhos.length; i++) {
      let inputAtual = inputsTamanhos[i];
      if (inputAtual.checked) {
        novoProduto.idtamanhopedido = inputAtual.value
      }
    }

    personalizarNovoProduto();
  })


  function personalizarNovoProduto() {
    abrirModal(".fade-personalizar", ".personalizar-produto");



    let itemCarrinho = produtoBd.find((produto) => {
      return produto.idproduto == novoProduto.idprodutopedido
    })

    let renderTamanhos = ``
    const containerTamanhos = document.querySelector(".radios-tamanhos");



    //Tamanhos do produto 
    function renderTamanhosPersonalizar() {

      for (t = 0; t < itemCarrinho.idtamanhorelacao_tamanhos.length; t++) {

        let tamanho = itemCarrinho.idtamanhorelacao_tamanhos[t]

        let tamanhoAtual = () => {
          if (novoProduto.idtamanhopedido == tamanho.idtamanho) {
            return "checked"
          }

          else {
            return ""
          }
        }

        let renderTamanho = `
              <button class="botao-radio-tamanho" value="${tamanho.idtamanho}">
              <input type="radio" id="tamanho${t}-personalizar" name="tamanho" ${tamanhoAtual()} >
              <label for="tamanho${t}-personalizar">${tamanho.nome} - ${tamanho.relacaoprodutotamanho.valor}</label>
              </button>
              `

        renderTamanhos += renderTamanho
        containerTamanhos.innerHTML = renderTamanhos
      }
    }

    function alterarTamanhosPersonalizar() {
      const botaoRadioTamanho = document.querySelectorAll('.botao-radio-tamanho')
      const containerMeioMeio = document.querySelector('.container-meio-meio')

      for (i = 0; i < botaoRadioTamanho.length; i++) {
        let botao = botaoRadioTamanho[i]
        botao.addEventListener('click', () => {
          novoProduto.idtamanhopedido = botao.value;
          novoProduto.meiomeios = [{
            "segundametade": null,
            "segundoterco": null,
            "terceiroterco": null,
            "segundoquarto": null,
            "terceiroquarto": null,
            "quartoquarto": null,
          }];
          containerMeioMeio.innerHTML = ""


        })

      }
    }

    let ordemExecucaoTamanhosPersonalizar = new Promise(() => {
      renderTamanhosPersonalizar()
    })
    ordemExecucaoTamanhosPersonalizar.then(alterarTamanhosPersonalizar())


    //Renderizar Meio Meio Atual         
    const personalizarMeioMeio = document.querySelector('.container-meio-meio')

    function nomeProdutoId(idproduto) {
      let produto = produtoBd.find((produto) => {
        return produto.idproduto == idproduto
      })

      return produto.nome
    }

    if (itemCarrinho.idcategoria_categoria.meioameio == false) {

      personalizarMeioMeio.innerHTML = "<h4>Não é possível realizar meio a meio com esse produto</h4>"
    }


    else {

      if (novoProduto.meiomeios.length != 0) {

        if (novoProduto.meiomeios[0].segundametade != null) {
          let nomePrimeiraMetade = itemCarrinho.nome
          let nomeSegundaMetade = nomeProdutoId(novoProduto.meiomeios[0].segundametade)
          personalizarMeioMeio.innerHTML = `
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/2 ${nomePrimeiraMetade}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/2 ${nomeSegundaMetade}</p>
                                        </button>
                                      
                                      `
        }

        else if (novoProduto.meiomeios[0].segundoterco != null) {
          let nomePrimeiroTerco = itemCarrinho.nome
          let nomeSegundoTerco = nomeProdutoId(novoProduto.meiomeios[0].segundoterco)
          let nomeTerceiroTerco = nomeProdutoId(novoProduto.meiomeios[0].terceiroterco)
          personalizarMeioMeio.innerHTML = `
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/3 ${nomePrimeiroTerco}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/3 ${nomeSegundoTerco}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/3 ${nomeTerceiroTerco}</p>
                                        </button>
                                        
                                      `
        }

        else if (novoProduto.meiomeios[0].segundoquarto != null) {
          let nomePrimeiroQuarto = itemCarrinho.nome
          let nomeSegundoQuarto = nomeProdutoId(novoProduto.meiomeios[0].segundoquarto)
          let nomeTerceiroQuarto = nomeProdutoId(novoProduto.meiomeios[0].terceiroquarto)
          let nomeQuartoQuarto = nomeProdutoId(novoProduto.meiomeios[0].quartoquarto)
          personalizarMeioMeio.innerHTML = `
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomePrimeiroQuarto}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomeSegundoQuarto}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomeTerceiroQuarto}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomeQuartoQuarto}</p>
                                        </button>                                         
                                      `
        }
      }


      else {
        personalizarMeioMeio.innerHTML = ""
      }
    }

    //Editar meio a meio

    function EditarMeio() {


      const containerPersonalizarMeio = document.querySelector('.container-personalizar-meio')
      let renderProdutosMeio = ''
      let produtosMeio = produtoBd.filter((produto) => {
        return produto.idcategoria == itemCarrinho.idcategoria && produto.idproduto != itemCarrinho.idproduto
      })

      for (k = 0; k < produtosMeio.length; k++) {
        for (u = 0; u < produtosMeio[k].idtamanhorelacao_tamanhos.length; u++) {
          if (produtosMeio[k].idtamanhorelacao_tamanhos[u].idtamanho == novoProduto.idtamanhopedido) {
            let produtoAtual = produtosMeio[k]

            function checkarMeio() {
              if (novoProduto.meiomeios.length != 0) {

                if (novoProduto.meiomeios[0].segundametade == produtoAtual.idproduto) {
                  return "checked"
                }
                else if (novoProduto.meiomeios[0].segundoterco == produtoAtual.idproduto) {
                  return "checked"
                }
                else if (novoProduto.meiomeios[0].terceiroterco == produtoAtual.idproduto) {
                  return "checked"
                }
                else if (novoProduto.meiomeios[0].segundoquarto == produtoAtual.idproduto) {
                  return "checked"
                }
                else if (novoProduto.meiomeios[0].terceiroquarto == produtoAtual.idproduto) {
                  return "checked"
                }
                else if (novoProduto.meiomeios[0].quartoquarto == produtoAtual.idproduto) {
                  return "checked"
                }
                else {
                  return ""
                }
              }
            }

            let produto = `
                      <div>
                        <input type="checkbox" class="checkboxes-meio" id="meio-${produtoAtual.nome}" name="meiomeio" value="${produtoAtual.idproduto}" ${checkarMeio()}>
                        <label for="meio-${produtoAtual.nome}">${produtoAtual.nome}</label>
                     </div>
                      `
            renderProdutosMeio += produto
            containerPersonalizarMeio.innerHTML = renderProdutosMeio
          }
        }
      }


      document.querySelector('.botao-salvar-meio').addEventListener('click', () => {
        let checkboxes = document.querySelectorAll('.checkboxes-meio');

        let contadorCheckboxes = 0;


        for (n = 0; n < checkboxes.length; n++) {
          if (checkboxes[n].checked) { contadorCheckboxes++ }
        }



        let meioMeiosTres = [{
          "segundametade": null,
          "segundoterco": null,
          "terceiroterco": null,
          "segundoquarto": null,
          "terceiroquarto": null,
          "quartoquarto": null,
        }];

        let meioMeiosQuatro = [{
          "segundametade": null,
          "segundoterco": null,
          "terceiroterco": null,
          "segundoquarto": null,
          "terceiroquarto": null,
          "quartoquarto": null,
        }];

        let semMeioMeio = [{
          "segundametade": null,
          "segundoterco": null,
          "terceiroterco": null,
          "segundoquarto": null,
          "terceiroquarto": null,
          "quartoquarto": null,
        }];

        for (c = 0; c < checkboxes.length; c++) {
          let checkboxAtual = checkboxes[c];

          if (contadorCheckboxes == 0) {
            novoProduto.meiomeios = semMeioMeio;
          }
          else if (contadorCheckboxes == 1) {
            if (checkboxAtual.checked) {
              novoProduto.meiomeios = [{
                "segundametade": checkboxAtual.value,
                "segundoterco": null,
                "terceiroterco": null,
                "segundoquarto": null,
                "terceiroquarto": null,
                "quartoquarto": null,
              }];


            }
          }

          else if (contadorCheckboxes == 2) {

            if (checkboxAtual.checked) {
              if (meioMeiosTres[0].segundoterco == null) {
                meioMeiosTres[0].segundoterco = checkboxAtual.value
              }

              else if (meioMeiosTres[0].terceiroterco == null) {
                meioMeiosTres[0].terceiroterco = checkboxAtual.value
              }

            };
            novoProduto.meiomeios = meioMeiosTres
          }

          else if (contadorCheckboxes == 3) {

            if (checkboxAtual.checked) {
              if (meioMeiosQuatro[0].segundoquarto == null) {
                meioMeiosQuatro[0].segundoquarto = checkboxAtual.value
              }

              else if (meioMeiosQuatro[0].terceiroquarto == null) {
                meioMeiosQuatro[0].terceiroquarto = checkboxAtual.value
              }

              else if (meioMeiosQuatro[0].quartoquarto == null) {
                meioMeiosQuatro[0].quartoquarto = checkboxAtual.value
              }

            };
            novoProduto.meiomeios = meioMeiosQuatro
          }
        }



        fecharModal(".fade-meio-meio", ".modal-meio-meio")

        function acharNomeProdutoMeio(i) {
          let produto = produtoBd.find((produto) => {
            return produto.idproduto == i
          })
          return produto.nome
        }

        let containerMeioMeio = document.querySelector('.container-meio-meio')
        if (novoProduto.meiomeios.length != 0) {

          if (novoProduto.meiomeios[0].segundametade != null) {
            let nomePrimeiraMetade = acharNomeProdutoMeio(novoProduto.idprodutopedido)
            let nomeSegundaMetade = acharNomeProdutoMeio(novoProduto.meiomeios[0].segundametade)
            containerMeioMeio.innerHTML = `
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/2 ${nomePrimeiraMetade}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/2 ${nomeSegundaMetade}</p>
                                        </button>
                                     `
          }

          else if (novoProduto.meiomeios[0].segundoterco != null) {
            let nomePrimeiroTerco = acharNomeProdutoMeio(novoProduto.idprodutopedido)
            let nomeSegundoTerco = acharNomeProdutoMeio(novoProduto.meiomeios[0].segundoterco)
            let nomeTerceiroTerco = acharNomeProdutoMeio(novoProduto.meiomeios[0].terceiroterco)
            containerMeioMeio.innerHTML = `
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/3 ${nomePrimeiroTerco}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/3 ${nomeSegundoTerco}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/3 ${nomeTerceiroTerco}</p>
                                        </button>
                                        
                                      `
          }

          else if (novoProduto.meiomeios[0].segundoquarto != null) {
            let nomePrimeiroQuarto = acharNomeProdutoMeio(novoProduto.idprodutopedido)
            let nomeSegundoQuarto = acharNomeProdutoMeio(novoProduto.meiomeios[0].segundoquarto)
            let nomeTerceiroQuarto = acharNomeProdutoMeio(novoProduto.meiomeios[0].terceiroquarto)
            let nomeQuartoQuarto = acharNomeProdutoMeio(novoProduto.meiomeios[0].quartoquarto)
            containerMeioMeio.innerHTML = `
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomePrimeiroQuarto}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomeSegundoQuarto}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomeTerceiroQuarto}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomeQuartoQuarto}</p>
                                        </button>                                         
                                      `
          }
        }


        else {
          containerMeioMeio.innerHTML = ``
        }


      })

    }

    document.querySelector('.personalizar-meio').addEventListener('click', () => {
      abrirModal(".fade-meio-meio", ".modal-meio-meio")
      EditarMeio();

    })


    //Renderizar quantidade atual e editar
    const containerQuantidade = document.querySelector('.quantidade');
    const quantidade = novoProduto.quantidade
    containerQuantidade.innerHTML = `<input type="number" class="input-quantidade" min="1" max="50" step="1" value="${quantidade}">`
    const inputQuantidade = document.querySelector('.input-quantidade')

    inputQuantidade.addEventListener('change', () => {
      novoProduto.quantidade = inputQuantidade.value

    })



    //Fechar a modal e descartar alterações
    document.querySelector('.botao-fechar-personalizar').addEventListener('click', () => {
      fecharModal(".fade-personalizar", ".personalizar-produto")
      renderTamanhos = '';

      novoProduto.quantidade = null,
        novoProduto.meiomeios = null
    })



    //Fechar a modal e salvar alterações
    document.querySelector('.botão-adicionar-personalizacao').addEventListener('click', () => {
      adicionarProdutoBD();



    })


  }
};

function tituloPedido(id) {

  if (id == null) {
    pedido = novoPedido
    document.querySelector('#titulo-pedido').innerHTML = `Novo pedido`
  }
  else {
    pedido = pedidosRenderizados.find((item) => {
      return item.idpedido == id
    })

    document.querySelector('#titulo-pedido').innerHTML = `Pedido Nº${pedido.idpedido}`
  }

  let pedido = ""
}

function infosPedido(id) {
  if (id == null) {
    pedido = novoPedido
    document.querySelector('.numero-pedido').innerHTML = `
  <h4>Novo pedido</h4>
  <p>Número Personalizado:</p>
  <div id="tempo-pedido">
    <img src="./assets/clock-white.svg" alt="Relógio">
    <p>00h00min</p>
  </div>
  <button class="botao-excluir">
    <img src="./assets/lixo-white.svg" alt="Lixo">
    <p>Excluir</p>
  </button>
`;
  }
  else {
    pedido = pedidosRenderizados.find((item) => {
      return item.idpedido == id
    })

    document.querySelector('.numero-pedido').innerHTML = `
  <h4>Pedido Nº${pedido.idpedido}</h4>
  <p>Número Personalizado: ${pedido.numeropersonalizado}</p>
  <div id="tempo-pedido">
    <img src="./assets/clock-white.svg" alt="Relógio">
    <p>00h00min</p>
  </div>
  <button class="botao-excluir">
    <img src="./assets/lixo-white.svg" alt="Lixo">
    <p>Excluir</p>
  </button>
`;
  }

  let pedido = ""


}

function tipoPedido(id) {
  let pedido = pedidosRenderizados.find((item) => {
    return item.idpedido == id
  }
  )
  if (pedido.tipopedido == 'delivery') {
    document.getElementById("option-1").checked = true;
  }
  else if (pedido.tipopedido == 'balcao') {
    document.getElementById("option-2").checked = true;
  }
}

function renderizarClientes(idPedido) {
  let pedido = pedidosRenderizados.find((item) => {
    return item.idpedido == idPedido
  }
  )
  const clientePedido = document.querySelector('.cliente-pedido')
  clientePedido.innerHTML = `
<div id="nome-cliente-pedido">
        <h4>${pedido.cliente_cliente.nome}</h4>
      </div>
      <div id="telefones-cliente">
        <div id="telefone-primario">
          <h4>Telefone primário</h4>
          <p>${pedido.cliente_cliente.telefoneprimario}</p>
        </div>
        <div id="telefone-secundario">
          <h4>Telefone secundário</h4>
          <p>${pedido.cliente_cliente.telefonesecundario}</p>
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
          <p>${pedido.cliente_cliente.rua},${pedido.cliente_cliente.numero},${pedido.cliente_cliente.bairro}
          </p>
        </div>
      </div>

      <button id="editar-cliente">Editar cliente</button>
      <button id="trocar-cliente">Trocar cliente</button>
`;

}

function renderCarrinho(idPedido) {
  let pedido = pedidosRenderizados.find((item) => {
    return item.idpedido == idPedido
  })


  let containerCarrinho = "";
  let cabecalhoTabela = `<thead>
  <tr>
    <th>Produto</th>
    <th>Qnt.</th>
    <th>Preço unit.</th>
    <th>Subtotal</th>
    <th>Ações</th>
  </tr>
</thead>`;
  for (var c = 0; c < pedido.produtospedidos.length; c++) {
    let itemCarrinho = pedido.produtospedidos[c];
    let categoriaItemCarrinho = itemCarrinho.relacaoprodutotamanho.idprodutorelacao_produto.idcategoria_categoria.nome;
    let nomeItemCarrinho = itemCarrinho.relacaoprodutotamanho.idprodutorelacao_produto.nome;
    let tamanhoItemCarrinho = itemCarrinho.relacaoprodutotamanho.idtamanhorelacao_tamanho.nome;
    let valorItemCarrinho = itemCarrinho.relacaoprodutotamanho.valor;
    let quatidadeItemCarrinho = itemCarrinho.quantidade;

    if (itemCarrinho.relacaoprodutotamanho.idprodutorelacao_produto.idcategoria_categoria.meioameio == true && itemCarrinho.meiomeios.length != 0) {
      if (itemCarrinho.meiomeios[0].segundametade != null) {
        let itemDoisSabores = `<tbody>
        <tr>
          <td>
            <div class="produto-tamanho">
              <img src="./assets/angle-double-right.svg" alt="">
              <h4>(${categoriaItemCarrinho}: ${tamanhoItemCarrinho})</h4>
            </div>
          </td>
          <td>${quatidadeItemCarrinho}</td>
          <td></td>
          <td></td>
          <td>
            <div class="acoes-carrinho">
            <button value="${itemCarrinho.idprodutocarrinho}" class="botao-editar-produto"><img src="./assets/editar.svg" alt=""></button>
            <button value="${itemCarrinho.idprodutocarrinho}" class="botao-excluir-produto"><img src="./assets/lixo-vermelho.svg" alt=""></button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="meio-a-meio">
              <img src="./assets/metade.png" alt="">
              <p>${nomeItemCarrinho}</p>
            </div>
          </td>
          <td>1/2</td>
          <td>${valorItemCarrinho}</td>
          <td>${(parseFloat(valorItemCarrinho) / 2).toFixed(2)}</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="meio-a-meio">
              <img src="./assets/metade.png" alt="">
              <p>${itemCarrinho.meiomeios[0].segundametade_produto.nome}</p>
            </div>
          </td>
          <td>1/2</td>
          <td>${itemCarrinho.meiomeios[0].segundametade_produto.relacaomeiotamanho.valor}</td>
          <td>${parseFloat(itemCarrinho.meiomeios[0].segundametade_produto.relacaomeiotamanho.valor).toFixed(2) / 2}</td>
          <td></td>
        </tr>                              
      </tbody>`

        containerCarrinho += itemDoisSabores
      }
      else if (itemCarrinho.meiomeios[0].segundoterco != null) {
        let itemTresSabores = `<tbody>
        <tr>
          <td>
            <div class="produto-tamanho">
              <img src="./assets/angle-double-right.svg" alt="">
              <h4>(${categoriaItemCarrinho}: ${tamanhoItemCarrinho})</h4>
            </div>
          </td>
          <td>${quatidadeItemCarrinho}</td>
          <td></td>
          <td></td>
          <td>
            <div class="acoes-carrinho">
            <button value="${itemCarrinho.idprodutocarrinho}" class="botao-editar-produto"><img src="./assets/editar.svg" alt=""></button>
            <button value="${itemCarrinho.idprodutocarrinho}" class="botao-excluir-produto"><img src="./assets/lixo-vermelho.svg" alt=""></button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="meio-a-meio">
              <img src="./assets/metade.png" alt="">
              <p>${nomeItemCarrinho}</p>
            </div>
          </td>
          <td>1/3</td>
          <td>${valorItemCarrinho}</td>
          <td>${(parseFloat(valorItemCarrinho) / 3).toFixed(2)}</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="meio-a-meio">
              <img src="./assets/metade.png" alt="">
              <p>${itemCarrinho.meiomeios[0].segundoterco_produto.nome}</p>
            </div>
          </td>
          <td>1/3</td>
          <td>${itemCarrinho.meiomeios[0].segundoterco_produto.relacaomeiotamanho.valor}</td>
          <td>${(parseFloat(itemCarrinho.meiomeios[0].segundoterco_produto.relacaomeiotamanho.valor) / 3).toFixed(2)}</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="meio-a-meio">
              <img src="./assets/metade.png" alt="">
              <p>${itemCarrinho.meiomeios[0].terceiroterco_produto.nome}</p>
            </div>
          </td>
          <td>1/3</td>
          <td>${itemCarrinho.meiomeios[0].terceiroterco_produto.relacaomeiotamanho.valor}</td>
          <td>${(parseFloat(itemCarrinho.meiomeios[0].terceiroterco_produto.relacaomeiotamanho.valor) / 3).toFixed(2)}</td>
          <td></td>
        </tr>                     
      </tbody>`

        containerCarrinho += itemTresSabores
      }
      else if (itemCarrinho.meiomeios[0].segundoquarto != null) {
        let itemQuatroSabores = `<tbody>
        <tr>
          <td>
            <div class="produto-tamanho">
              <img src="./assets/angle-double-right.svg" alt="">
              <h4>(${categoriaItemCarrinho}: ${tamanhoItemCarrinho})</h4>
            </div>
          </td>
          <td>${quatidadeItemCarrinho}</td>
          <td></td>
          <td></td>
          <td>
            <div class="acoes-carrinho">
            <button value="${itemCarrinho.idprodutocarrinho}" class="botao-editar-produto"><img src="./assets/editar.svg" alt=""></button>
            <button value="${itemCarrinho.idprodutocarrinho}" class="botao-excluir-produto"><img src="./assets/lixo-vermelho.svg" alt=""></button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="meio-a-meio">
              <img src="./assets/metade.png" alt="">
              <p>${nomeItemCarrinho}</p>
            </div>
          </td>
          <td>1/4</td>
          <td>${valorItemCarrinho}</td>
          <td>${(parseFloat(valorItemCarrinho) / 4).toFixed(2)}</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="meio-a-meio">
              <img src="./assets/metade.png" alt="">
              <p>${itemCarrinho.meiomeios[0].segundoquarto_produto.nome}</p>
            </div>
          </td>
          <td>1/4</td>
          <td>${itemCarrinho.meiomeios[0].segundoquarto_produto.relacaomeiotamanho.valor}</td>
          <td>${(parseFloat(itemCarrinho.meiomeios[0].segundoquarto_produto.relacaomeiotamanho.valor) / 4).toFixed(2)}</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="meio-a-meio">
              <img src="./assets/metade.png" alt="">
              <p>${itemCarrinho.meiomeios[0].terceiroquarto_produto.nome}</p>
            </div>
          </td>
          <td>1/4</td>
          <td>${itemCarrinho.meiomeios[0].terceiroquarto_produto.relacaomeiotamanho.valor}</td>
          <td>${(parseFloat(itemCarrinho.meiomeios[0].terceiroquarto_produto.relacaomeiotamanho.valor) / 4).toFixed(2)}</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="meio-a-meio">
              <img src="./assets/metade.png" alt="">
              <p>${itemCarrinho.meiomeios[0].quartoquarto_produto.nome}</p>
            </div>
          </td>
          <td>1/4</td>
          <td>${itemCarrinho.meiomeios[0].quartoquarto_produto.relacaomeiotamanho.valor}</td>
          <td>${(parseFloat(itemCarrinho.meiomeios[0].quartoquarto_produto.relacaomeiotamanho.valor) / 4).toFixed(2)}</td>
          <td></td>
        </tr>          
      </tbody>`

        containerCarrinho += itemQuatroSabores
      }

      else if (itemCarrinho.meiomeios[0].segundametade == null || itemCarrinho.meiomeios[0].segundoterco == null || itemCarrinho.meiomeios[0].segundoquarto == null) {
        let ItemUmSabor = `
        <tbody>
                <tr>
                  <td>
                    <div class="produto-tamanho">
                      <img src="./assets/angle-double-right.svg" alt="">
                      <h4>(${categoriaItemCarrinho}: ${tamanhoItemCarrinho}) ${nomeItemCarrinho}</h4>
                    </div>
                  </td>
                  <td>${quatidadeItemCarrinho}</td>
                  <td>${valorItemCarrinho}</td>
                  <td>${valorItemCarrinho}</td>
                  <td>
                    <div class="acoes-carrinho">
                    <button value="${itemCarrinho.idprodutocarrinho}" class="botao-editar-produto"><img src="./assets/editar.svg" alt=""></button>
                    <button value="${itemCarrinho.idprodutocarrinho}" class="botao-excluir-produto"><img src="./assets/lixo-vermelho.svg" alt=""></button>
                    </div>
                  </td>
                </tr>
              </tbody>
        `
        containerCarrinho += ItemUmSabor
      }
    }
    else {
      let ItemUmSabor = `
      <tbody>
              <tr>
                <td>
                  <div class="produto-tamanho">
                    <img src="./assets/angle-double-right.svg" alt="">
                    <h4>(${categoriaItemCarrinho}: ${tamanhoItemCarrinho}) ${nomeItemCarrinho}</h4>
                  </div>
                </td>
                <td>${quatidadeItemCarrinho}</td>
                <td>${valorItemCarrinho}</td>
                <td>${valorItemCarrinho}</td>
                <td>
                  <div class="acoes-carrinho">
                  <button value="${itemCarrinho.idprodutocarrinho}" class="botao-editar-produto"><img src="./assets/editar.svg" alt=""></button>
                  <button value="${itemCarrinho.idprodutocarrinho}" class="botao-excluir-produto"><img src="./assets/lixo-vermelho.svg" alt=""></button>
                  </div>
                </td>
              </tr>
            </tbody>
      `
      containerCarrinho += ItemUmSabor
    };






  };

  document.querySelector('.tabela-carrinho').innerHTML = cabecalhoTabela + containerCarrinho;

  //Excluir produto carrinho
  const botaoExluir = document.querySelectorAll('.botao-excluir-produto');
  for (var e = 0; e < botaoExluir.length; e++) {
    let contador = e;

    botaoExluir[contador].addEventListener('click', () => {
      let idProdutoCarrinho = botaoExluir[contador].value
      excluirProdutoCarrinho(idProdutoCarrinho, idPedido);
    })
  }


}

//Abrindo modal de edição de um produto já criado
function detalhesPedido(id) {

  if (id == null) {
    pedido = novoPedido
  }
  else {
    pedido = pedidosRenderizados.find((item) => {
      return item.idpedido == id
    })
  }

  let pedido = ""

  const idPedido = pedido.idpedido;


  //Abrindo modal de edição
  abrirModal(".primeiro-fade", ".novo-pedido");

  //Titulo
  tituloPedido(id);

  //detalhes pedido
  infosPedido(id);

  //tipo pedido
  tipoPedido(id);

  //renderizar cliente
  renderizarClientes(id);

  //renderizar carrinho

  renderCarrinho(id);




  document.querySelector('#trocar-cliente').addEventListener('click', () => {
    const clientePedido = document.querySelector('.cliente-pedido')

    let ordemExecucaoClientes = new Promise(() => {
      clientePedido.innerHTML = `<div id="nome-cliente-pedido">
<h4>Cliente</h4>
<h4>(Nenhum cliente selecionado)</h4>
</div>
<div class="pesquisa-cliente">
<img src="./assets/search-orange.svg" id="icone-lupa" alt="Lupa">
<input type="text" class="texto-busca-cliente" placeholder="Buscar cliente por telefone" />
</div>
<div id="container-encontrados">
</div>
<button class="botao-novo-cliente">Novo cliente</button>
<button id="trocar-cliente">Pesquisa avançada</button>`
    })


    ordemExecucaoClientes.then(renderizarClientes()).then(selecionarNovoCliente())

    function renderizarClientes() {
      let elementosClientes = "";
      clientesBd.forEach(cliente => {
        let elementoCliente = `
        <div class="cliente-encontrado">
        <button class="botao-selecionar-cliente" value="${cliente.id}">
      <h4>${cliente.nome}</h1>
        <h4>${cliente.telefoneprimario}</h4>
        <p>${cliente.rua}, ${cliente.numero}, ${cliente.bairro}</p>
        </button>
    </div>
    `;
        elementosClientes += elementoCliente;
      })

      document.querySelector("#container-encontrados").innerHTML = elementosClientes;
    }

    function selecionarNovoCliente() {
      const botaoSelecionar = document.querySelectorAll('.botao-selecionar-cliente');
      for (b = 0; b < botaoSelecionar.length; b++) {
        botaoAtual = botaoSelecionar[b]
        let idCliente = botaoAtual.value
        botaoAtual.addEventListener('click', () => {
          trocarClientePedido(idPedido, idCliente);

        })
      }

      const botaoNovo = document.querySelector('.botao-novo-cliente');
      botaoNovo.addEventListener('click', () => {
        abrirModal(".fade-novocliente", ".novo-cliente");
        novoCliente(idPedido);

      })

    }





  })
  //Produtos




  ///Editar produto carrinho
  let produtosPedidos = pedido.produtospedidos
  const botaoEditar = document.querySelectorAll('.botao-editar-produto')
  for (var e = 0; e < botaoEditar.length; e++) {
    let contador = e;

    botaoEditar[contador].addEventListener('click', () => {
      abrirModal(".fade-personalizar", ".personalizar-produto")
      let idProdutoCarrinho = botaoEditar[contador].value
      editarCarrinho(idProdutoCarrinho);
    })
  }


  function editarCarrinho(idProdutoCarrinho) {


    let itemCarrinho = produtosPedidos.find((item) => {
      return item.idprodutocarrinho == idProdutoCarrinho
    })

    let renderTamanhos = ``
    const containerTamanhos = document.querySelector(".radios-tamanhos");

    let novoProduto = {
      "idprodutocarrinho": idProdutoCarrinho,
      "idpedido": itemCarrinho.idpedido,
      "idprodutopedido": itemCarrinho.idprodutopedido,
      "idtamanhopedido": itemCarrinho.idtamanhopedido,
      "quantidade": itemCarrinho.quantidade,
      "meiomeios": itemCarrinho.meiomeios
    };

    //Tamanhos do produto 
    function renderTamanhosPersonalizar() {
      let produto = produtoBd.find((produto) => {
        return produto.idproduto == itemCarrinho.idprodutopedido
      })


      for (t = 0; t < produto.idtamanhorelacao_tamanhos.length; t++) {

        let tamanho = produto.idtamanhorelacao_tamanhos[t]

        let tamanhoAtual = () => {
          if (itemCarrinho.idtamanhopedido == tamanho.idtamanho) {
            return "checked"
          }

          else {
            return ""
          }
        }

        let renderTamanho = `
              <button class="botao-radio-tamanho" value="${tamanho.idtamanho}">
              <input type="radio" id="tamanho${t}-personalizar" name="tamanho" ${tamanhoAtual()} >
              <label for="tamanho${t}-personalizar">${tamanho.nome} - ${tamanho.relacaoprodutotamanho.valor}</label>
              </button>
              `

        renderTamanhos += renderTamanho
        containerTamanhos.innerHTML = renderTamanhos
      }
    }

    function alterarTamanhosPersonalizar() {
      const botaoRadioTamanho = document.querySelectorAll('.botao-radio-tamanho')
      const containerMeioMeio = document.querySelector('.container-meio-meio')

      for (i = 0; i < botaoRadioTamanho.length; i++) {
        let botao = botaoRadioTamanho[i]
        botao.addEventListener('click', () => {
          novoProduto.idtamanhopedido = botao.value;
          novoProduto.meiomeios = [{
            "segundametade": null,
            "segundoterco": null,
            "terceiroterco": null,
            "segundoquarto": null,
            "terceiroquarto": null,
            "quartoquarto": null,
          }];
          containerMeioMeio.innerHTML = ""


        })

      }
    }

    let ordemExecucaoTamanhosPersonalizar = new Promise(() => {
      renderTamanhosPersonalizar()
    })
    ordemExecucaoTamanhosPersonalizar.then(alterarTamanhosPersonalizar())


    //Renderizar Meio Meio Atual         
    const personalizarMeioMeio = document.querySelector('.container-meio-meio')

    if (itemCarrinho.relacaoprodutotamanho.idprodutorelacao_produto.idcategoria_categoria.meioameio == false) {

      personalizarMeioMeio.innerHTML = "<h4>Não é possível realizar meio a meio com esse produto</h4>"
    }


    else {

      if (novoProduto.meiomeios.length != 0) {

        if (novoProduto.meiomeios[0].segundametade != null) {
          let nomePrimeiraMetade = itemCarrinho.relacaoprodutotamanho.idprodutorelacao_produto.nome
          let nomeSegundaMetade = novoProduto.meiomeios[0].segundametade_produto.nome
          personalizarMeioMeio.innerHTML = `
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/2 ${nomePrimeiraMetade}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/2 ${nomeSegundaMetade}</p>
                                        </button>
                                      
                                      `
        }

        else if (novoProduto.meiomeios[0].segundoterco != null) {
          let nomePrimeiroTerco = itemCarrinho.relacaoprodutotamanho.idprodutorelacao_produto.nome
          let nomeSegundoTerco = novoProduto.meiomeios[0].segundoterco_produto.nome
          let nomeTerceiroTerco = novoProduto.meiomeios[0].terceiroterco_produto.nome
          personalizarMeioMeio.innerHTML = `
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/3 ${nomePrimeiroTerco}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/3 ${nomeSegundoTerco}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/3 ${nomeTerceiroTerco}</p>
                                        </button>
                                        
                                      `
        }

        else if (novoProduto.meiomeios[0].segundoquarto != null) {
          let nomePrimeiroQuarto = itemCarrinho.relacaoprodutotamanho.idprodutorelacao_produto.nome
          let nomeSegundoQuarto = novoProduto.meiomeios[0].segundoquarto_produto.nome
          let nomeTerceiroQuarto = novoProduto.meiomeios[0].terceiroquarto_produto.nome
          let nomeQuartoQuarto = novoProduto.meiomeios[0].quartoquarto_produto.nome
          personalizarMeioMeio.innerHTML = `
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomePrimeiroQuarto}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomeSegundoQuarto}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomeTerceiroQuarto}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomeQuartoQuarto}</p>
                                        </button>                                         
                                      `
        }
      }


      else {
        personalizarMeioMeio.innerHTML = ""
      }
    }

    //Editar meio a meio

    function EditarMeio() {


      const containerPersonalizarMeio = document.querySelector('.container-personalizar-meio')
      let renderProdutosMeio = ''
      let produtosMeio = produtoBd.filter((produto) => {
        return produto.idcategoria == itemCarrinho.relacaoprodutotamanho.idprodutorelacao_produto.idcategoria && produto.idproduto != itemCarrinho.idprodutopedido
      })

      for (k = 0; k < produtosMeio.length; k++) {
        for (u = 0; u < produtosMeio[k].idtamanhorelacao_tamanhos.length; u++) {
          if (produtosMeio[k].idtamanhorelacao_tamanhos[u].idtamanho == novoProduto.idtamanhopedido) {
            let produtoAtual = produtosMeio[k]

            function checkarMeio() {
              if (novoProduto.meiomeios.length != 0) {

                if (novoProduto.meiomeios[0].segundametade == produtoAtual.idproduto) {
                  return "checked"
                }
                else if (novoProduto.meiomeios[0].segundoterco == produtoAtual.idproduto) {
                  return "checked"
                }
                else if (novoProduto.meiomeios[0].terceiroterco == produtoAtual.idproduto) {
                  return "checked"
                }
                else if (novoProduto.meiomeios[0].segundoquarto == produtoAtual.idproduto) {
                  return "checked"
                }
                else if (novoProduto.meiomeios[0].terceiroquarto == produtoAtual.idproduto) {
                  return "checked"
                }
                else if (novoProduto.meiomeios[0].quartoquarto == produtoAtual.idproduto) {
                  return "checked"
                }
                else {
                  return ""
                }
              }
            }

            let produto = `
                      <div>
                        <input type="checkbox" class="checkboxes-meio" id="meio-${produtoAtual.nome}" name="meiomeio" value="${produtoAtual.idproduto}" ${checkarMeio()}>
                        <label for="meio-${produtoAtual.nome}">${produtoAtual.nome}</label>
                     </div>
                      `
            renderProdutosMeio += produto
            containerPersonalizarMeio.innerHTML = renderProdutosMeio
          }
        }
      }


      document.querySelector('.botao-salvar-meio').addEventListener('click', () => {
        let checkboxes = document.querySelectorAll('.checkboxes-meio');

        let contadorCheckboxes = 0;


        for (n = 0; n < checkboxes.length; n++) {
          if (checkboxes[n].checked) { contadorCheckboxes++ }
        }



        let meioMeiosTres = [{
          "segundametade": null,
          "segundoterco": null,
          "terceiroterco": null,
          "segundoquarto": null,
          "terceiroquarto": null,
          "quartoquarto": null,
        }];

        let meioMeiosQuatro = [{
          "segundametade": null,
          "segundoterco": null,
          "terceiroterco": null,
          "segundoquarto": null,
          "terceiroquarto": null,
          "quartoquarto": null,
        }];

        let semMeioMeio = [{
          "segundametade": null,
          "segundoterco": null,
          "terceiroterco": null,
          "segundoquarto": null,
          "terceiroquarto": null,
          "quartoquarto": null,
        }];

        for (c = 0; c < checkboxes.length; c++) {
          let checkboxAtual = checkboxes[c];

          if (contadorCheckboxes == 0) {
            novoProduto.meiomeios = semMeioMeio;
          }
          else if (contadorCheckboxes == 1) {
            if (checkboxAtual.checked) {
              novoProduto.meiomeios = [{
                "segundametade": checkboxAtual.value,
                "segundoterco": null,
                "terceiroterco": null,
                "segundoquarto": null,
                "terceiroquarto": null,
                "quartoquarto": null,
              }];


            }
          }

          else if (contadorCheckboxes == 2) {

            if (checkboxAtual.checked) {
              if (meioMeiosTres[0].segundoterco == null) {
                meioMeiosTres[0].segundoterco = checkboxAtual.value
              }

              else if (meioMeiosTres[0].terceiroterco == null) {
                meioMeiosTres[0].terceiroterco = checkboxAtual.value
              }

            };
            novoProduto.meiomeios = meioMeiosTres
          }

          else if (contadorCheckboxes == 3) {

            if (checkboxAtual.checked) {
              if (meioMeiosQuatro[0].segundoquarto == null) {
                meioMeiosQuatro[0].segundoquarto = checkboxAtual.value
              }

              else if (meioMeiosQuatro[0].terceiroquarto == null) {
                meioMeiosQuatro[0].terceiroquarto = checkboxAtual.value
              }

              else if (meioMeiosQuatro[0].quartoquarto == null) {
                meioMeiosQuatro[0].quartoquarto = checkboxAtual.value
              }

            };
            novoProduto.meiomeios = meioMeiosQuatro
          }
        }



        fecharModal(".fade-meio-meio", ".modal-meio-meio")

        function acharNomeProdutoMeio(i) {
          let produto = produtoBd.find((produto) => {
            return produto.idproduto == i
          })
          return produto.nome
        }

        let containerMeioMeio = document.querySelector('.container-meio-meio')
        if (novoProduto.meiomeios.length != 0) {

          if (novoProduto.meiomeios[0].segundametade != null) {
            let nomePrimeiraMetade = acharNomeProdutoMeio(novoProduto.idprodutopedido)
            let nomeSegundaMetade = acharNomeProdutoMeio(novoProduto.meiomeios[0].segundametade)
            containerMeioMeio.innerHTML = `
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/2 ${nomePrimeiraMetade}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/2 ${nomeSegundaMetade}</p>
                                        </button>
                                     `
          }

          else if (novoProduto.meiomeios[0].segundoterco != null) {
            let nomePrimeiroTerco = acharNomeProdutoMeio(novoProduto.idprodutopedido)
            let nomeSegundoTerco = acharNomeProdutoMeio(novoProduto.meiomeios[0].segundoterco)
            let nomeTerceiroTerco = acharNomeProdutoMeio(novoProduto.meiomeios[0].terceiroterco)
            containerMeioMeio.innerHTML = `
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/3 ${nomePrimeiroTerco}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/3 ${nomeSegundoTerco}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/3 ${nomeTerceiroTerco}</p>
                                        </button>
                                        
                                      `
          }

          else if (novoProduto.meiomeios[0].segundoquarto != null) {
            let nomePrimeiroQuarto = acharNomeProdutoMeio(novoProduto.idprodutopedido)
            let nomeSegundoQuarto = acharNomeProdutoMeio(novoProduto.meiomeios[0].segundoquarto)
            let nomeTerceiroQuarto = acharNomeProdutoMeio(novoProduto.meiomeios[0].terceiroquarto)
            let nomeQuartoQuarto = acharNomeProdutoMeio(novoProduto.meiomeios[0].quartoquarto)
            containerMeioMeio.innerHTML = `
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomePrimeiroQuarto}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomeSegundoQuarto}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomeTerceiroQuarto}</p>
                                        </button>
                                        <button class="botao-meio-meio">
                                          <img src="./assets/lixo-white.svg" alt="Lixo">
                                          <p>1/4 ${nomeQuartoQuarto}</p>
                                        </button>                                         
                                      `
          }
        }


        else {
          containerMeioMeio.innerHTML = ``
        }


      })

    }

    document.querySelector('.personalizar-meio').addEventListener('click', () => {
      abrirModal(".fade-meio-meio", ".modal-meio-meio")
      EditarMeio();

    })


    //Renderizar quantidade atual e editar
    const containerQuantidade = document.querySelector('.quantidade');
    const quantidade = novoProduto.quantidade
    containerQuantidade.innerHTML = `<input type="number" class="input-quantidade" min="1" max="50" step="1" value="${quantidade}">`
    const inputQuantidade = document.querySelector('.input-quantidade')

    inputQuantidade.addEventListener('change', () => {
      novoProduto.quantidade = inputQuantidade.value

    })



    //Fechar a modal e descartar alterações
    document.querySelector('.botao-fechar-personalizar').addEventListener('click', () => {
      fecharModal(".fade-personalizar", ".personalizar-produto")
      renderTamanhos = '';
      novoProduto.idpedido = itemCarrinho.idpedido,
        novoProduto.idprodutopedido = itemCarrinho.idprodutopedido,
        novoProduto.idtamanhopedido = itemCarrinho.idtamanhopedido,
        novoProduto.quantidade = itemCarrinho.quantidade,
        novoProduto.meiomeios = itemCarrinho.meiomeios
    })



    //Fechar a modal e salvar alterações
    document.querySelector('.botão-adicionar-personalizacao').addEventListener('click', () => {
      produtoEditado = novoProduto

      uparProdutoEditado();

    })

    /*
                  let botaoAdicionar = document.querySelectorAll('.adicionar-produto')
                  for (i = 0; i < botaoAdicionar.length; i++) {
                    let botao = botaoAdicionar[i]
                    botao.addEventListener('click', () => {
                      novoProduto.idprodutopedido = botao.value
                    })
                  }
    
                  let botaoSelecionarTamanho = document.querySelector(".botao-selecionar-tamanho");
                  botaoSelecionarTamanho.addEventListener('click', () => {
    
                    let renderTamanhos = ``
    
    
    
                    abrirModal(".fade-personalizar", ".personalizar-produto");
    
    
    
                    let produto = produtoBd.find((produto) => {
                      return produto.idproduto == novoProduto.idprodutopedido
                    })
    
    
                    for (t = 0; t < produto.idtamanhorelacao_tamanhos.length; t++) {
    
                      let tamanho = produto.idtamanhorelacao_tamanhos[t]
    
                      let tamanhoAtual = () => {
                        if (novoProduto.idtamanhopedido == tamanho.idtamanho) {
                          return "checked"
                        }
    
                        else {
                          return ""
                        }
                      }
    
                      let renderTamanho = `
                        <input type="radio" id="tamanho${t}-personalizar" name="tamanho" ${tamanhoAtual()} >
                        <label for="tamanho${t}-personalizar">${tamanho.nome} - ${tamanho.relacaoprodutotamanho.valor}</label>
                        `
    
                      renderTamanhos += renderTamanho
                      containerTamanhos.innerHTML = renderTamanhos
                    }
    
    
                  })*/

  }

  //Adicionar novo produto ao pedido
  const botaoNovoProduto = document.querySelector('.botao-novo-produto');
  botaoNovoProduto.addEventListener('click', () => {
    adicionarProdutoCarrinho(idPedido)
  })


};



addEventListener('DOMContentLoaded', () => {
  carregarPedidos();
  carregarProdutos();
  carregarClientes();
}

);




























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

