class MenuCascata {
  constructor(divTitulo, containerCards) {
    this.divTitulo = document.querySelector(divTitulo);
    this.containerCards = document.querySelector(containerCards);
  }
  configurarMenu() {
    this.divTitulo.addEventListener("click", () => {
      this.containerCards.classList.toggle("ativo");
      this.divTitulo.classList.toggle("ativo");
    });
  }
}

const criarNovo = new MenuCascata(".titulo-criar", ".container-criar");
criarNovo.configurarMenu();

const pedidosCriados = new MenuCascata(".titulo-criados", ".container-cards");
pedidosCriados.configurarMenu();

