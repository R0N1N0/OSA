
const express = require('express');
const router = express.Router();
const addGroupController = require('../../controllers/group/addGroupController.js');
const removeMember = require('../../controllers/group/removeMember.js')
const addUserGroupController = require("../../controllers/group/addUserGroup.js");
const validateToken = require('../../middleware/tokenMiddleware.js');
router.use("/group", validateToken);

router.post("/group/addGroup", addGroupController.addGroup);
router.get("/group/getGroupMembers", addGroupController.getGroupMembers);
router.delete("/group/deleteGroup", addGroupController.deleteGroup);
router.delete("/group/deleteMember", removeMember.removeMember);
router.post("/group/addUserGroup", addUserGroupController.addUserGroup);

module.exports = router;