function updateOrders() {
  fetch("http://localhost:5000/orders/historicoPedidos")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let elementsOrder = "";
      let orders = JSON.parse(json);
      orders.forEach((order) => {
        let elementOrder = `<tr class="found-orders">
      <td data-label="id">${order.id}</td>
      <td data-label="emissao">${order.emissao}</td>
      <td data-label="cliente">${order.cliente}</td>
      <td data-label="telefone">${order.telefone}</td>
      <td data-label="endereco">${order.endereco}</td>
     <td data-label="status">${order.status}</td>
      <td data-label="pago">${order.pago}</td>
      <td data-label="itens">${order.itens}</td>
      <td data-label="desconto">${order.desconto}</td>
      <td data-label="total_final">${order.total_final}</td>
  </tr>`;
        elementsOrder += elementOrder;
      });
      document.querySelector("#registerListBody").innerHTML = elementsOrder;
    });
}
