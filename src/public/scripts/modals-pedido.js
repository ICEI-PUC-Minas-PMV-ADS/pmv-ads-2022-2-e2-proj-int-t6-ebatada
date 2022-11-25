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


function renderPedidosCriados() {
  fetch('http://localhost:5000/api/pedidos').then(res => {
    return res.json();
  }).then(json => {
    let pedidos = json;
    let containerPedidos = "";

    pedidos.forEach(pedido => {
      let abertoEm = new Date(pedido.abertoem);

      let cardPedido =
        `<div class="card">
        <div class="info-pedido">
          <div class="id-pedido">
            <h4>#${pedido.idpedido}</h4>
          </div>
          <div class="data-pedido">
            <h4>${abertoEm.getDate()}/${abertoEm.getMonth() + 1}/${abertoEm.getFullYear()}</h4>
          </div>
          <div class="tipo-pedido">
            <h4>${pedido.tipopedido}</h4>
          </div>
          <div class="horas-pedido">
            <h4>${abertoEm.getHours()}:${abertoEm.getMinutes()}</h4>
          </div>
        </div>
        <div class="info-cliente">
          <img src="./assets/user.svg" alt="Usuário" class="icone-usuario">
          <div class="nome-cliente-card">
            <h4>${pedido.cliente_cliente.nome}</h4>
          </div>
          <div class="pedidos-cliente">
            <p>Número de pedidos: #</p>
          </div>
        </div>
        <div class="entrega">
          <img src="./assets/marker.svg" alt="Local" class="icone-local">
          <div class="endereco-cliente">
            <p>${pedido.cliente_cliente.rua},${pedido.cliente_cliente.numero},${pedido.cliente_cliente.bairro}</p>
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
          <button class="botao-detalhes">Detalhes</button>
        </div>
      </div>`;
      containerPedidos += cardPedido;

      document.querySelector('.botao-detalhes').addEventListener('click', () => {
        abrirModal(".primeiro-fade", ".novo-pedido");
      })
    })

    document.querySelector(".container-cards").innerHTML = containerPedidos;



  })
}

renderPedidosCriados();

function visualizarpedidos() {

}



























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

