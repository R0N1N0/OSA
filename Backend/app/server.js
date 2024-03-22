const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const formData = require('express-form-data');
const cors = require('cors');
// manejar cors
app.use(cors());
// esto es para poder manejar formdata
app.use(formData.parse());

// Middleware para habilitar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permitir solicitudes desde cualquier origen
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Permitir los métodos HTTP especificados
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Permitir los encabezados especificados
    next();
});

// Configurar body-parser con un límite más alto
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Middleware global
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json( {message: "Hola que tal"} );
});

// ---------------- Rutas publicas ---------------
// Rutas de usuario --------------------
const userRoutes = require('./routes/user/userRoute.js');
app.use('/', userRoutes);
// ruta para crear un nuevo usuario
const createUser = require('./routes/user/createUserRoute.js');
app.use('/', createUser);

// Rutas de maquinas

// ruta para recuperar todas las maquinas
const mvRoutes = require('./routes/mv/mv.js');
app.use('/', mvRoutes);


// --------------- Rutas protegidas ----------------- 

//ruta para recuperar informacion del usuario
const getUserInfo = require('./routes/user/getUserInfoRoute.js');
app.use('/', getUserInfo);



// run server
app.listen(PORT, () => {
    console.log(`Servidor escuchando por el puerto ${PORT}`);
});




