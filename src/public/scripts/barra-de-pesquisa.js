class Pesquisa {
  constructor(containerFiltroSelecionado, opcaoAtualFiltro, containerFiltros, setaContainerFiltros, listaFiltros) {
    this.containerFiltroSelecionado = document.querySelector(containerFiltroSelecionado);
    this.opcaoAtualFiltro = document.querySelector(opcaoAtualFiltro);
    this.containerFiltros = document.querySelector(containerFiltros);
    this.setaContainerFiltros = document.querySelector(setaContainerFiltros);
    this.listaFiltros = document.querySelectorAll(listaFiltros);
  }

  configurarPesquisa() {
    this.containerFiltroSelecionado.addEventListener("click", () => {
      this.containerFiltros.classList.toggle("ativo");
      this.setaContainerFiltros.classList.toggle("ativo");
    });

    this.listaFiltros.forEach(o => {
      o.addEventListener("click", () => {
        this.opcaoAtualFiltro.innerHTML = o.querySelector("label").innerHTML;
        this.containerFiltros.classList.remove("ativo");
        this.setaContainerFiltros.classList.remove("ativo");
      });
    });
  }
};

const pesquisaPedidos = new Pesquisa(".selecionado", ".opcao-atual", ".container-opcoes", ".seta-filtro", ".opcao");
pesquisaPedidos.configurarPesquisa();

const pesquisaProdutos = new Pesquisa(".filtro-produto-selecionado", ".opcao-atual-filtro-produto", ".container-opcoes-produto", ".seta-filtro-produto", ".opcao-produto");
pesquisaProdutos.configurarPesquisa();