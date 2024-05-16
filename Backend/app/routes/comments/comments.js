const express = require('express');
const router = express.Router();
const addComment = require('../../controllers/comments/addComment.js');
const getComments = require('../../controllers/comments/getComments.js');
const validateToken = require('../../middleware/tokenMiddleware.js');

router.post('/comments/addComment', validateToken, addComment.addComment);
router.get('/comments/getComments', getComments.getComments);

module.exports = router;