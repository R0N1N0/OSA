const express = require('express');
const router = express.Router();
const mvController = require('../../controllers/mv/mv.js');
const mvValidation = require('../../controllers/mv/mvValidation.js');

router.get('/getMv', mvController.getVirtualMachines);
router.get('/specificMv', mvController.getSpecificMv);
router.post('/validation', mvValidation.validation);
router.put('/specificMv', mvController.downloadsMachine);

module.exports = router;


