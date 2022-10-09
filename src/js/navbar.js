class NavBar {
  constructor(paiSubNav, subNav, filhoSubNav) {
    this.paiSubNav = document.querySelector(paiSubNav);
    this.subNav = document.querySelector(subNav);
    this.navBar = document.querySelector(".left-navbar");
    this.filhoSubNav = document.querySelector(filhoSubNav);
    this.botaoSanduiche = document.querySelector(".nav-logo")

  }
  clicarBotaoSanduiche() {
    this.botaoSanduiche.addEventListener("click", () => {
      if (this.navBar.classList.contains('active') == true) {
        this.navBar.classList.remove('active');
        this.subNav.classList.remove('active');

      }
      else if (this.navBar.classList.contains('active') == false) {
        this.navBar.classList.add('active');
        if (this.paiSubNav.classList.contains('pagina-atual') == true) {
          this.subNav.classList.add('active');
        }
      }
    });
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
        this.subNav.classList.remove('active');
      }
      else if (this.navBar.classList.contains('active') == true) {
        this.subNav.classList.add('active');
      }
      else if (this.navBar.classList.contains('active') == false) {
        this.navBar.classList.add('active');
        this.subNav.classList.add('active');
      }
      this.botaoSanduiche.addEventListener("click", () => {
        this.subNav.classList.remove('active');
      })


    });
  }
};
/*const setaMinhaLoja = document.querySelector(".seta-minhaloja");
const setaRelatorios = document.querySelector(".seta-relatorios");
const setaConfiguracoes = document.querySelector(".seta-configuracoes");
const botaoSanduiche = document.querySelector(".nav-logo");

botaoSanduiche.addEventListener("click", () => {
  if (setaMinhaLoja.classList.contains('active') == true
    || setaRelatorios.classList.contains('active') == true
    || setaConfiguracoes.classList.contains('active') == true) {
    setaMinhaLoja.classList.remove('active')
    setaRelatorios.classList.remove('active')
    setaConfiguracoes.classList.remove('active')
  }
  else {
    setaMinhaLoja.classList.add('active')
    setaRelatorios.classList.add('active')
    setaConfiguracoes.classList.add('active')
  }
});
*/

const caixa = new NavBar(".caixa");
caixa.configurarPaginaSimples();

const pedidos = new NavBar(".pedidos");
pedidos.configurarPaginaSimples();

const cardapioOnline = new NavBar(".cardapio-online");
cardapioOnline.configurarPaginaSimples();

const minhaLoja = new NavBar(".minha-loja", ".subnav-minhaloja");
const informacoes = new NavBar(".minha-loja", ".subnav-minhaloja", ".pagina-informacoes");
const produtos = new NavBar(".minha-loja", ".subnav-minhaloja", ".pagina-produtos");
const clientes = new NavBar(".minha-loja", ".subnav-minhaloja", ".pagina-clientes");
const taxas = new NavBar(".minha-loja", ".subnav-minhaloja", ".pagina-taxas");

minhaLoja.clicarSubNav();
informacoes.configurarPaginaAtual();
produtos.configurarPaginaAtual();
clientes.configurarPaginaAtual();
taxas.configurarPaginaAtual();

const relatorios = new NavBar(".relatorios", ".subnav-relatorios");
const historicoCaixa = new NavBar(".relatorios", ".subnav-relatorios", ".pagina-historico-caixa");
const historicoPedidos = new NavBar(".relatorios", ".subnav-relatorios", ".pagina-historico-pedidos");
const produtosMaisVendidos = new NavBar(".relatorios", ".subnav-relatorios", ".pagina-mais-vendidos");

relatorios.clicarSubNav();
historicoCaixa.configurarPaginaAtual();
historicoPedidos.configurarPaginaAtual();
produtosMaisVendidos.configurarPaginaAtual();

const configuracoes = new NavBar(".configuracoes", ".subnav-configuracoes");
const loginsAdministrativos = new NavBar(".configuracoes", ".subnav-configuracoes", ".pagina-logins");
const impressoras = new NavBar(".configuracoes", ".subnav-configuracoes", ".pagina-impressoras");

configuracoes.clicarSubNav();
loginsAdministrativos.configurarPaginaAtual();
impressoras.configurarPaginaAtual();





