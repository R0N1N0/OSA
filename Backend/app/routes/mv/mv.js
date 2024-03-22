const express = require('express');
const router = express.Router();
const mvController = require('../../controllers/mv/mv.js');

router.get('/getMv', mvController.getVirtualMachine);

module.exports = router;


