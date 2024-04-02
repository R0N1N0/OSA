const express = require('express');
const router = express.Router();
const getUserInfoController = require('../../controllers/user/getUserInfoController');
const validateToken = require('../../middleware/tokenMiddleware.js');

router.use('/getUser/info', validateToken, getUserInfoController.getUserInfo);
router.use('/getUser/mv', validateToken, getUserInfoController.getUserMV);
router.use('/getUser/group', validateToken, getUserInfoController.getUserGroup);
router.use('/getUser/ranking', validateToken, getUserInfoController.getUserRanking);
router.use('/getUser/awards', validateToken, getUserInfoController.getUserAwards);

module.exports = router;

