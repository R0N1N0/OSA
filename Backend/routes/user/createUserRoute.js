
const express = require('express');
const router = express.Router();
const createUserController = require("../../controllers/user/createUserController.js");

router.post('/createUser', createUserController.createUser);

module.exports = router;