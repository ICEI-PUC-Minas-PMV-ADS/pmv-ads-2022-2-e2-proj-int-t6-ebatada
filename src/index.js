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
