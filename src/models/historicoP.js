module.exports = {
  async pushOrders() {
    try {
      const allOrders = await db.query("SELECT * FROM orderhistory");
      console.log("Pedidos encontrados");
      return allOrders.rows;
    } catch (error) {
      console.log("error ocurred" + error);
    }
  },

  async newOrder(
    id,
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
    try {
      await db.query(
        "INSERT INTO orderhistory VALUES ('" +
          gerarID() +
          "','" +
          emissao +
          "','" +
          cliente +
          "','" +
          telefone +
          "','" +
          endereco +
          "','" +
          status +
          "','" +
          pago +
          "','" +
          itens +
          "','" +
          desconto +
          "','" +
          total_final +
          "' ) "
      );
    } catch (error) {
      console.log("error ocurred" + error);
    }
  },
};

const db = require("../Postgres/database");

function gerarID() {
  return Math.random().toString(36).substring(2, 7);
}
