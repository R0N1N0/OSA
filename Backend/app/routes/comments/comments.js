const express = require('express');
const router = express.Router();
const addComment = require('../../controllers/comments/addComment.js');

router.post('/addComment', addComment.addComment);

module.exports = router;