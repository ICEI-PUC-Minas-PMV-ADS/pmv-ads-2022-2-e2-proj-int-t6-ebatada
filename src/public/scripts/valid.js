document.querySelector("#logar").addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  const require = {
    name: name,
    email: email,
    password: password,
  };
  console.log(require);
  const opcoes = {
    method: "POST",
    body: JSON.stringify(require),
    headers: new Headers({ "content-type": "application/json" }),
  };
  fetch("http://localhost:5000/login", opcoes)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let logado = json.erro;
      console.log(json);
      if (logado == false) {
        location.href = "/pedidos.html";
      } else {
        console.log(json.mensagem);
      }
    });
});
