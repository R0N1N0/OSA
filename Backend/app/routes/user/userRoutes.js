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
router.use('/getUser/info', getUserInfoController.getUserInfo);
router.use('/getUser/mv', getUserInfoController.getUserMV);
router.use('/getUser/group', getUserInfoController.getUserGroup);
router.use('/getUser/ranking', getUserInfoController.getUserRanking);
router.use('/getUser/awards', getUserInfoController.getUserAwards);

// Ruta para asignar premios a usuarios
router.use("/award", validateToken);
router.use('award/assignAward', userAwardController.assignAward);

module.exports = router;
