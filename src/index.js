const bodyParser = require("body-parser");
const PORT = 5000;
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { eAdmin } = require("./middlewares/auth");
const User = require("./models/User");
const app = express();
const apiRoute = require("./routes/api");
const orderRoute = require("./routes/orders");
const path = require("path");

//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/", eAdmin, async (req, res) => {
  await User.findAll({
    attributes: ["id", "name", "email"],
    order: [["id", "DESC"]],
  })
    .then((users) => {
      return res.json({
        erro: false,
        users,
        id_usuario_logado: req.userId,
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: Nenhum usuário encontrado!",
      });
    });
});

app.post("/cadastrar", async (req, res) => {
  var dados = req.body;

  dados.password = await bcrypt.hash(dados.password, 8);

  await User.create(dados)
    .then(() => {
      return res.json({
        erro: false,
        mensagem: "Usuário cadastrado com sucesso!",
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: Usuário não cadastrado com sucesso!",
      });
    });
});

app.post("/login", async (req, res) => {
  let email = req.body.email;
  const user = await User.findOne({
    attributes: ["id", "name", "email", "password"],
    where: {
      email: email,
    },
  });

  if (user === null) {
    return res.json({
      erro: true,
      mensagem:
        "Erro: Usuário ou a senha incorreta! Nenhum usuário com este e-mail",
    });
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.json({
      erro: true,
      mensagem: "Erro: Usuário ou a senha incorreta! Senha incorreta!",
    });
  }

  var token = jwt.sign({ id: user.id }, "D62ST92Y7A6V7K5C6W9ZU6W8KS3", {
    expiresIn: "7d",
  });

  return res.json({
    erro: false,
    mensagem: "Login realizado com sucesso!",
    token,
  });
});

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/historicoDePedidos", function (req, res) {
  res.sendFile(__dirname + "/public/historico-pedidos.html");
});

//
app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
//

//

app.use("/api", apiRoute);
app.use("/orders", orderRoute);
app.use(express.static("public"));
