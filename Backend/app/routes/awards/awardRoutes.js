const express = require("express");
const router = express.Router();
const validateToken = require('../../middleware/tokenMiddleware.js');
const awardController = require("../../controllers/awards/awardController.js");

router.post("/getAwards", validateToken, awardController.getAwards);

module.exports = router;
