const selected = document.querySelector(".selecionado");
const opcaoAtual = document.querySelector(".opcao-atual");
const optionsContainer = document.querySelector(".container-opcoes");
const seta = document.querySelector(".seta-filtro");

const optionsList = document.querySelectorAll(".opcao");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("ativo");
  seta.classList.toggle("ativo");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    opcaoAtual.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("ativo");
    seta.classList.remove("ativo");
  });
});