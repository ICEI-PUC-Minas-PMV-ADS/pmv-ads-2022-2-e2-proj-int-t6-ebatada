document.querySelector("#salvar").addEventListener("click", () => {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let cadastro = {
    name: name,
    email: email,
    password: password,
  };

  const opcoes = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(cadastro),
  };

  fetch("http://localhost:5000/cadastrar", opcoes).then((res) => {
    console.log(res);
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
  });
});
