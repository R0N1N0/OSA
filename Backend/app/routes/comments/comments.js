const express = require('express');
const router = express.Router();
const addComment = require('../../controllers/comments/addComment.js');
const validateToken = require('../../middleware/tokenMiddleware.js');

router.use("/comments", validateToken);
router.post('/comments/addComment', addComment.addComment);

module.exports = router;