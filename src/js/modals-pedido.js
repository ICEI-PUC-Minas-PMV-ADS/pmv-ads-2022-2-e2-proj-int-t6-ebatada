const fade = document.querySelector(".primeiro-fade");
const modal = document.querySelector(".novo-pedido");
const abrirModal = document.querySelector(".botao-novo");
const fecharModal = document.querySelector(".botao-fechar");

abrirModal.addEventListener('click', () => {
  fade.classList.add('ativo');
  modal.classList.add('ativo');
});

fecharModal.addEventListener('click', () => {
  fade.classList.remove('ativo');
  modal.classList.remove('ativo');
});