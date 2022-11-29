const { Router } = require("express");
const controller = require("../models/controller");
const { getUsersById } = require("../models/queries");

const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUsers);
router.get("/:id", controller.getUsersById);
router.put("/:id", controller.updateUsers);
router.delete("/:id", controller.removeUsers);

module.exports = router;
