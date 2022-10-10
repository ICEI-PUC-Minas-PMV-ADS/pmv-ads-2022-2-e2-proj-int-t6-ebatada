class NavBar {
  constructor(paiSubNav, subNav, filhoSubNav, setaSubNav) {
    this.paiSubNav = document.querySelector(paiSubNav);
    this.subNav = document.querySelector(subNav);
    this.navBar = document.querySelector(".left-navbar");
    this.filhoSubNav = document.querySelector(filhoSubNav);
    this.botaoSanduiche = document.querySelector(".nav-logo")
    this.setaSubNav = document.querySelector(setaSubNav);
    this.setaMinhaLoja = document.querySelector(".seta-minhaloja");
    this.setaRelatorios = document.querySelector(".seta-relatorios");
    this.setaConfiguracoes = document.querySelector(".seta-configuracoes");
    this.minhaLoja = document.querySelector(".subnav-minhaloja");
    this.relatorios = document.querySelector(".subnav-relatorios");
    this.configuracoes = document.querySelector(".subnav-configuracoes");
  }
  abrirNavBar() {
    this.navBar.classList.add('active');
    this.ativasSetas();
    this.ativarPaginaAtual();
    this.setaAberta();
  }
  fecharNavBar() {
    this.navBar.classList.remove('active');
    this.desativarSetas();
    this.fecharSubNavManual();
  }
  clicarBotaoSanduiche() {
    this.botaoSanduiche.addEventListener("click", () => {
      this.resetSeta();
      if (this.navBar.classList.contains('active')) {
        this.fecharNavBar();
      }
      else
        this.abrirNavBar();
    });
  }
  abrirSubNav() {
    if (this.navBar.classList.contains('active') == true)
      this.subNav.classList.add('active');
    else {
      this.navBar.classList.add('active');
      this.subNav.classList.add('active');
      this.ativasSetas();
    }
  }
  fecharSubNav() {
    this.subNav.classList.remove('active');
  }
  fecharSubNavManual() {
    this.minhaLoja.classList.remove('active');
    this.relatorios.classList.remove('active');
    this.configuracoes.classList.remove('active');
  }
  ativarPaginaAtual() {
    if (this.paiSubNav.classList.contains('pagina-atual') == true)
      this.subNav.classList.add('active');
  }
  ativasSetas() {
    this.setaMinhaLoja.classList.add('active')
    this.setaRelatorios.classList.add('active')
    this.setaConfiguracoes.classList.add('active')
  }
  desativarSetas() {
    this.setaMinhaLoja.classList.remove('active')
    this.setaRelatorios.classList.remove('active')
    this.setaConfiguracoes.classList.remove('active')
  }
  setaAberta() {
    if (this.paiSubNav.classList.contains('minha-loja') == true) this.setaMinhaLoja.classList.add('open');
    if (this.paiSubNav.classList.contains('relatorios') == true) this.setaRelatorios.classList.add('open');
    if (this.paiSubNav.classList.contains('configuracoes') == true) this.setaConfiguracoes.classList.add('open');
  }
  setaFechada() {
    if (this.paiSubNav.classList.contains('minha-loja') == true) this.setaMinhaLoja.classList.remove('open');
    if (this.paiSubNav.classList.contains('relatorios') == true) this.setaRelatorios.classList.remove('open');
    if (this.paiSubNav.classList.contains('configuracoes') == true) this.setaConfiguracoes.classList.remove('open');
  }
  resetSeta() {
    this.setaMinhaLoja.classList.remove('open');
    this.setaRelatorios.classList.remove('open');
    this.setaConfiguracoes.classList.remove('open');
  }
  configurarPaginaSimples() {
    if (this.paiSubNav.classList.contains('caixa') && document.title == "Caixa - éBatata"
      || this.paiSubNav.classList.contains('pedidos') && document.title == "Pedidos - éBatata"
      || this.paiSubNav.classList.contains('cardapio-online') && document.title == "Cardápio Online - éBatata") {
      this.paiSubNav.classList.toggle('pagina-atual');
      this.clicarBotaoSanduiche();
    }
  }
  configurarPaginaAtual() {
    if (this.paiSubNav.classList.contains('minha-loja') == true && this.filhoSubNav.classList.contains('pagina-informacoes') == true && document.title == "Minha Loja - éBatata"
      || this.paiSubNav.classList.contains('minha-loja') == true && this.filhoSubNav.classList.contains('pagina-produtos') == true && document.title == "Produtos - éBatata"
      || this.paiSubNav.classList.contains('minha-loja') == true && this.filhoSubNav.classList.contains('pagina-clientes') == true && document.title == "Clientes - éBatata"
      || this.paiSubNav.classList.contains('minha-loja') == true && this.filhoSubNav.classList.contains('pagina-taxas') == true && document.title == "Taxas de entrega - éBatata"

      || this.paiSubNav.classList.contains('relatorios') == true && this.filhoSubNav.classList.contains('pagina-historico-caixa') == true && document.title == "Histórico de caixa - éBatata"
      || this.paiSubNav.classList.contains('relatorios') == true && this.filhoSubNav.classList.contains('pagina-historico-pedidos') == true && document.title == "Histórico de pedidos - éBatata"
      || this.paiSubNav.classList.contains('relatorios') == true && this.filhoSubNav.classList.contains('pagina-mais-vendidos') == true && document.title == "Produtos mais vendidos - éBatata"

      || this.paiSubNav.classList.contains('configuracoes') == true && this.filhoSubNav.classList.contains('pagina-logins') == true && document.title == "Logins Administrativos - éBatata"
      || this.paiSubNav.classList.contains('configuracoes') == true && this.filhoSubNav.classList.contains('pagina-impressoras') == true && document.title == "Impressoras - éBatata") {

      this.filhoSubNav.classList.add('pagina-atual');
      this.paiSubNav.classList.toggle('pagina-atual');
      this.clicarBotaoSanduiche();
    }
    else {
      this.filhoSubNav.classList.remove('pagina-atual');
    }
  }
  clicarSubNav() {
    this.paiSubNav.addEventListener("click", () => {
      if (this.subNav.classList.contains('active') == true) {
        this.fecharSubNav();
        this.setaFechada();
      }
      else {
        this.fecharSubNavManual();
        this.resetSeta();
        this.abrirSubNav();
        this.setaAberta();
      }
    });
  }
};

const caixa = new NavBar(".caixa");
caixa.configurarPaginaSimples();

const pedidos = new NavBar(".pedidos");
pedidos.configurarPaginaSimples();

const cardapioOnline = new NavBar(".cardapio-online");
cardapioOnline.configurarPaginaSimples();

const minhaLoja = new NavBar(".minha-loja", ".subnav-minhaloja");
const informacoes = new NavBar(".minha-loja", ".subnav-minhaloja", ".pagina-informacoes", ".seta-minhaloja");
const produtos = new NavBar(".minha-loja", ".subnav-minhaloja", ".pagina-produtos", ".seta-minhaloja");
const clientes = new NavBar(".minha-loja", ".subnav-minhaloja", ".pagina-clientes", ".seta-minhaloja");
const taxas = new NavBar(".minha-loja", ".subnav-minhaloja", ".pagina-taxas", ".seta-minhaloja");

minhaLoja.clicarSubNav();
informacoes.configurarPaginaAtual();
produtos.configurarPaginaAtual();
clientes.configurarPaginaAtual();
taxas.configurarPaginaAtual();

const relatorios = new NavBar(".relatorios", ".subnav-relatorios");
const historicoCaixa = new NavBar(".relatorios", ".subnav-relatorios", ".pagina-historico-caixa", ".seta-relatorios");
const historicoPedidos = new NavBar(".relatorios", ".subnav-relatorios", ".pagina-historico-pedidos", ".seta-relatorios");
const produtosMaisVendidos = new NavBar(".relatorios", ".subnav-relatorios", ".pagina-mais-vendidos", ".seta-relatorios");

relatorios.clicarSubNav();
historicoCaixa.configurarPaginaAtual();
historicoPedidos.configurarPaginaAtual();
produtosMaisVendidos.configurarPaginaAtual();

const configuracoes = new NavBar(".configuracoes", ".subnav-configuracoes");
const loginsAdministrativos = new NavBar(".configuracoes", ".subnav-configuracoes", ".pagina-logins", ".seta-configuracoes");
const impressoras = new NavBar(".configuracoes", ".subnav-configuracoes", ".pagina-impressoras", ".seta-configuracoes");

configuracoes.clicarSubNav();
loginsAdministrativos.configurarPaginaAtual();
impressoras.configurarPaginaAtual();




