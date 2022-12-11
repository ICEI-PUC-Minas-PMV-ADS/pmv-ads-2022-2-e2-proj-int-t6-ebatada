function updateOrders() {
  if (document.querySelector("#radiOne").checked) {
    fetch("http://localhost:5000/api/pedidos")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let elementsOrder = "";
        let orders = json;
        orders.forEach((order) => {
          let elementOrder = `<tr class="found-orders">
      <td data-label="id">${order.idpedido}</td>
      <td data-label="emissao">00/00/00</td>
      <td data-label="cliente">${order.cliente_cliente.nome}</td>
      <td data-label="telefone">${order.cliente_cliente.telefoneprimario}</td>
      <td data-label="endereco">${order.cliente_cliente.rua}, ${order.cliente_cliente.numero},  ${order.cliente_cliente.bairro}</td>
      <td data-label="status">---</td>
      <td data-label="pago">${order.pago}</td>
      <td data-label="total_final">0000</td>
  </tr>`;
          elementsOrder += elementOrder;
        });
        document.querySelector("#registerListBody").innerHTML = elementsOrder;
      });
  } else if (document.querySelector("#radioTwo").checked) {
    var selectMes = document.querySelector("#select-mes");
    var mes = selectMes.options[selectMes.selectedIndex].value;
    var dia = parseInt(document.querySelector("#day-dia").value);
    var selectAmes = document.querySelector("#select-a-mes");
    var ames = selectAmes.options[selectAmes.selectedIndex].value;
    var adia = parseInt(document.querySelector("#day-a-dia").value);
    fetch(
      "http://localhost:5000/api/pedidosdata?mes=" +
        mes +
        "&dia=" +
        dia +
        "&ames=" +
        ames +
        "&adia=" +
        adia +
        ""
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let elementsOrder = "";
        let orders = json;
        orders.forEach((order) => {
          let elementOrder = `<tr class="found-orders">
       <td data-label="id">${order.idpedido}</td>
       <td data-label="emissao">00/00/00</td>
       <td data-label="cliente">${order.cliente_cliente.nome}</td>
       <td data-label="telefone">${order.cliente_cliente.telefoneprimario}</td>
       <td data-label="endereco">${order.cliente_cliente.rua}, ${order.cliente_cliente.numero}, ${order.cliente_cliente.bairro}</td>
       <td data-label="status">---</td>
       <td data-label="pago">${order.pago}</td>
       <td data-label="total_final">0000</td>
  </tr>`;
          elementsOrder += elementOrder;
        });
        document.querySelector("#registerListBody").innerHTML = elementsOrder;
      });
  }
}

updateOrders();

document.querySelector("#view").addEventListener("click", () => {
  document.querySelector("#registerListBody").innerHTML = "";
  updateOrders();
});

document.querySelector("#radioTwo").addEventListener("click", () => {
  const container = document.querySelectorAll(".separator");
  for (var i = 0; i < container.length; i++) {
    container[i].classList.add("ativo");
  }
});

document.querySelector("#radiOne").addEventListener("click", () => {
  const container = document.querySelectorAll(".separator");
  for (var i = 0; i < container.length; i++) {
    container[i].classList.remove("ativo");
  }
});
