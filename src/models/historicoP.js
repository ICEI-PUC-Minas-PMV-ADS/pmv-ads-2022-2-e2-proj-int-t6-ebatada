module.exports = {
  orders: [
    {
      id: 1,
      emissao: "00/00/00",
      cliente: "teste1",
      telefone: "00000000",
      endereco: "rua xd xd",
      status: "finalizado",
      pago: "pago",
      itens: "teste",
      desconto: "teste",
      total_final: "R$ 00,00",
    },
  ],

  getALL() {
    return this.orders;
  },

  newOrder(
    emissao,
    cliente,
    telefone,
    endereco,
    status,
    pago,
    itens,
    desconto,
    total_final
  ) {
    this.orders.push({
      id: generateID(),
      emissao,
      cliente,
      telefone,
      endereco,
      status,
      pago,
      itens,
      desconto,
      total_final,
    });
  },
};

function generateID() {
  return Math.random().toString(36).subStr(2, 9);
}
