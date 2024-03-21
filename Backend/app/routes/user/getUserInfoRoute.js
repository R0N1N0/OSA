const express = require('express');
const router = express.Router();
const getUserInfoController = require('../../controllers/user/getUserInfoController');
const validateToken = require('../../middleware/tokenMiddleware.js');

router.use('/getUserInfo', validateToken, getUserInfoController.getUserInfo);

module.exports = router;

