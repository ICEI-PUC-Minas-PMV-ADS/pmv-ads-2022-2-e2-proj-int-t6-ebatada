function logar() {
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;

  console.log(
    JSON.stringify({
      name: name,
      password: password,
    })
  );

  fetch("/login", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  }).then(async (resp) => {
    var status = await resp.text();
    console.log(status);
    if (status == "conectado") {
      location.href = "/acesso-restrito/acesso.html";
    } else {
      alert("nome e senha invalidos!!");
    }
  });
}
