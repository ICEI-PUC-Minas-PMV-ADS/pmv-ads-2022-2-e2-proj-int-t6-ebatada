var registerList = {
  lastIdGenerated: 0,
  user: [
    {
      id: 1,
      data: "00/00/00",
      cliente: "teste1",
      fone: "00000000",
      adress: "rua xd xd",
      status: "finalizado",
      pago: "pago",
      itens: "teste",
      desconto: "teste",
      total: "R$ 00,00",
    },
    {
      id: 1,
      data: "00/00/00",
      cliente: "teste2",
      fone: "00000000",
      adress: "rua xd xd",
      status: "finalizado",
      pago: "pago",
      itens: "teste",
      desconto: "teste",
      total: "R$ 00,00",
    },
    {
      id: 1,
      data: "00/00/00",
      cliente: "teste3",
      fone: "00000000",
      adress: "rua xd xd",
      status: "finalizado",
      pago: "pago",
      itens: "teste",
      desconto: "teste",
      total: "R$ 00,00",
    },
    {
      id: 1,
      data: "00/00/00",
      cliente: "teste4",
      fone: "00000000",
      adress: "rua xd xd",
      status: "finalizado",
      pago: "pago",
      itens: "teste",
      desconto: "teste",
      total: "R$ 00,00",
    },
    {
      id: 1,
      data: "00/00/00",
      cliente: "teste5",
      fone: "00000000",
      adress: "rua xd xd",
      status: "finalizado",
      pago: "pago",
      itens: "teste",
      desconto: "teste",
      total: "R$ 00,00",
    },
    {
      id: 1,
      data: "00/00/00",
      cliente: "teste6",
      fone: "00000000",
      adress: "rua xd xd",
      status: "finalizado",
      pago: "pago",
      itens: "teste",
      desconto: "teste",
      total: "R$ 00,00",
    },
    {
      id: 1,
      data: "00/00/00",
      cliente: "teste7",
      fone: "00000000",
      adress: "rua xd xd",
      status: "finalizado",
      pago: "pago",
      itens: "teste",
      desconto: "teste",
      total: "R$ 00,00",
    },
    {
      id: 1,
      data: "00/00/00",
      cliente: "teste8",
      fone: "00000000",
      adress: "rua xd xd",
      status: "finalizado",
      pago: "pago",
      itens: "teste",
      desconto: "teste",
      total: "R$ 00,00",
    },
    {
      id: 1,
      data: "00/00/00",
      cliente: "teste9",
      fone: "00000000",
      adress: "rua xd xd",
      status: "finalizado",
      pago: "pago",
      itens: "teste",
      desconto: "teste",
      total: "R$ 00,00",
    },
    {
      id: 1,
      data: "00/00/00",
      cliente: "teste10",
      fone: "00000000",
      adress: "rua xd xd",
      status: "finalizado",
      pago: "pago",
      itens: "teste",
      desconto: "teste",
      total: "R$ 00,00",
    },
  ],
};

function render() {
  const tbody = document.getElementById("registerListBody");
  if (tbody) {
    tbody.innerHTML = registerList.user
      .map((usuario) => {
        return `<tr>
            <td>${usuario.id}</td>
            <td>${usuario.data}</td>
            <td>${usuario.cliente}</td>
            <td>${usuario.fone}</td>
            <td>${usuario.adress}</td>
            <td>${usuario.status}</td>
            <td>${usuario.pago}</td>
            <td>${usuario.itens}</td>
            <td>${usuario.desconto}</td>
            <td>${usuario.total}</td>
            
            </tr>`;
      })
      .join("");
  }
}

function insertUser(
  data,
  cliente,
  fone,
  adress,
  status,
  pago,
  itens,
  desconto,
  total
) {
  const id = registerList.lastIdGenerated + 1;
  registerList.user.push({
    id,
    cliente,
    fone,
  });
}

function editUser(id, cliente, fone) {}

function deleteUser(id) {}

window.addEventListener("load", () => {
  render();
});
