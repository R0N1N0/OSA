
const express = require('express');
const router = express.Router();
const addGroupController = require('../../controllers/group/addGroupController.js');
const validateToken = require('../../middleware/tokenMiddleware.js');

router.use("/group", validateToken);

router.post("/group/addGroup", addGroupController.addGroup);
router.get("/group/getGroupMembers", addGroupController.getGroupMembers);
router.delete("/group/deleteGroup", addGroupController.deleteGroup);
router.delete("/group/deleteMember", addGroupController.removeMember);


module.exports = router;