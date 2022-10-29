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
});