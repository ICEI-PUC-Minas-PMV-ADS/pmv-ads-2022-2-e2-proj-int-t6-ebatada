class Fade {
  constructor(fade, modal, botaoAbrir, botaoFechar) {
    this.fade = document.querySelector(fade);
    this.modal = document.querySelector(modal);
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
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
  }
}

const modalNovoPedido = new Fade(".primeiro-fade", ".novo-pedido", ".botao-novo", ".botao-fechar");
modalNovoPedido.renderModal();

const modalNovoCliente = new Fade(".fade-novocliente", ".novo-cliente", ".botao-novo-cliente", ".botao-fechar-novo");
modalNovoCliente.renderModal();





/*const enderecoSelecionado = document.querySelector(".endereco-selecionado");
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


document.addEventListener('DOMContentLoaded', atualizarClientes())

function atualizarClientes() {
  fetch('http://localhost:5000/api/clientes').then(res => {
    return res.json();
  }).then(json => {
    let elementosClientes = "";
    let clientes = JSON.parse(json);
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

