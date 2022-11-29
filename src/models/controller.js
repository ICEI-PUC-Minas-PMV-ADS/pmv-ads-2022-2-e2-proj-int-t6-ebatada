const pool = require("../Postgres/db");
const queries = require("./queries");

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUsersById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const addUsers = async (req, res) => {
  const { name, email, password } = req.body;

  // checando se o email existe
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("email já existe");
    }

    //adicionando usuarios ao db
    pool.query(
      queries.addUsers,
      [name, email, password],
      async (error, results) => {
        if (error) throw error;
        res.status(201).send("usuario criado com sucesso!");
        console.log("usuario criado");
      }
    );
  });
};

const removeUsers = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUsersById, [id], (error, results) => {
    const noUserFound = !results.rows.length;
    if (noUserFound) {
      res.send("Usuario não existe");
    }

    pool.query(queries.removeUsers, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("usuario removido com sucesso!");
    });
  });
};

const updateUsers = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query(queries.getUsersById, [id], (error, results) => {
    const noUserFound = !results.rows.length;
    if (noUserFound) {
      res.send("Usuario não existe");
    }

    pool.query(queries.updateUsers, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("update realizado com sucesso!");
    });
  });
};

module.exports = {
  getUsers,
  getUsersById,
  addUsers,
  removeUsers,
  updateUsers,
};
