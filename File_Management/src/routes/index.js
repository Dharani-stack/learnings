const express = require('express');
const fileRoutes = require('./routes.js');

const router = express.Router();

router.use('/', fileRoutes);

module.exports = router;