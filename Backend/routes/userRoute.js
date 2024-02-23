

// routes user 

import express from 'express';
const router = express.Router();
import userController from '../controllers/userController';

router.get('/userLogin', userController.getUserAuth);
router.post('/userInsert', userController.insertUser);

module.exports = router;