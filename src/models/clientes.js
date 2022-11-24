module.exports = {
  async pegarClientes() {
    try {
      const todosClientes = await db.query("SELECT * FROM clientes");
      console.log("Clientes encontrados");
      return todosClientes.rows;
    } catch (error) {
      console.log("Ocorreu algum erro ao pegar os clientes. Erro:" + error);
    }
  },

  async novoCliente(
    nome,
    telefoneprimario,
    telefonesecundario,
    rua,
    numero,
    bairro,
    complemento,
    referencia
  ) {
    try {
      await db.query(
        "INSERT INTO Clientes VALUES ('" +
          gerarID() +
          "', '" +
          nome +
          "', '" +
          telefoneprimario +
          "', '" +
          telefonesecundario +
          "', '" +
          rua +
          "', '" +
          numero +
          "', '" +
          bairro +
          "', '" +
          complemento +
          "', '" +
          referencia +
          "')"
      );
      console.log("Cliente cadastrado");
    } catch (error) {
      console.log("Ocorreu algum erro ao cadastrar os clientes. Erro:" + error);
    }
  },
};

const db = require("../Postgres/database");

function gerarID() {
  return Math.random().toString(36).substring(2, 7);
}
