const express = require('express');
const router = express.Router();
const createUserController = require("../../controllers/user/createUserController.js");
const userController = require("../../controllers/user/userController.js");
const getUserInfoController = require('../../controllers/user/getUserInfoController');
const userAwardController = require("../../controllers/user/userAwardController.js");
const validateToken = require('../../middleware/tokenMiddleware.js');

// Rutas para creacion de usuarios y login
router.post('/createUser', createUserController.createUser);
router.post('/login', userController.getUserAuth);

// Rutas privadas
router.use('/getUser', validateToken);

// Rutas privadas para obtener información de usuario
router.get('/getUser/info', getUserInfoController.getUserInfo);
router.get('/getUser/mv', getUserInfoController.getUserMV);
router.get('/getUser/group', getUserInfoController.getUserGroup);
router.get('/getUser/ranking', getUserInfoController.getUserRanking);
router.get('/getUser/awards', getUserInfoController.getUserAwards);

// Ruta para asignar premios a usuarios
router.use("/award", validateToken);
router.post('award/assignAward', userAwardController.assignAward);

module.exports = router;
