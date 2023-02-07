var express = require("express");
var router = express.Router();
const {login, register} = require("../../controllers/admin/auth")

router.post("/login",login)
router.post("/register",register)

module.exports = router;