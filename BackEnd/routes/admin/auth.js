var express = require("express");
var router = express.Router();
const {login} = require("../../controllers/admin/auth")

router.post("/login",login)

module.exports = router;