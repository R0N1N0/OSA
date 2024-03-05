
const express = require('express');
const router = express.Router();
const userController = require("../../controllers/user/userController.js");

router.post('/login', userController.getUserAuth);

module.exports = router;