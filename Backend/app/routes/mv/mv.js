const express = require('express');
const router = express.Router();
const mvController = require('../../controllers/mv/mv.js');

router.get('/getMv', mvController.getVirtualMachines);
router.get('/specificMv', mvController.getSpecificMv);

module.exports = router;


