const usersRoutes = require("../src/routes/routes");
const bodyParser = require("body-parser");
const PORT = 5000;
const express = require("express");

const app = express();
const apiRoute = require("./routes/api");
const orderRoute = require("./routes/orders");
const path = require("path");
const pool = require("./Postgres/db");

//

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});

app.post("/users/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Success");
    } else {
      res.send("Not Allowed");
    }
  } catch {
    res.status(500).send();
  }
});

app.get("/historicoDePedidos", function (req, res) {
  res.sendFile(__dirname + "/public/historico-pedidos.html");
});

//
app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
//

app.use(express.json());
app.use("/users", usersRoutes);

//

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", apiRoute);
app.use("/orders", orderRoute);
app.use(express.static("public"));
app.use("/", express.static(path.join(__dirname, "public")));
