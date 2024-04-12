
const express = require('express');
const router = express.Router();
const addGroupController = require('../../controllers/group/addGroupController.js');
const validateToken = require('../../middleware/tokenMiddleware.js');

router.use("/group", validateToken);

router.use("/group/addGroup", addGroupController.addGroup);

module.exports = router;