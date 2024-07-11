const express = require("express");

const empCrud = require('./routes.js');

const router = express.Router();

router.use('/', empCrud);

module.exports = router;
