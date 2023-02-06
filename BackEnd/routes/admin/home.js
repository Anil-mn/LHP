var express = require('express');
const { home } = require('../../controllers/admin/home');
var router = express.Router();

router.get('/home',home);

module.exports = router;