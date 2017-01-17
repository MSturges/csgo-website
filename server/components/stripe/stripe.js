const express = require('express');
const router = express.Router();

let dontateController = require('./controllers/donate.server.controller.js');

router.post('/donate', dontateController);

module.exports = router;
