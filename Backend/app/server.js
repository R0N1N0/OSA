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
    res.json( {message: "Bienvenido a la OSA API"} );
});

/* Rutas de usuario */
const userRoutes = require('./routes/user/userRoutes.js');
app.use('/user', userRoutes);

/* Rutas de las maquinas */
const mvRoutes = require('./routes/mv/mv.js');
app.use('/mv', mvRoutes);

/* Rutas de los premios */
const awards = require('./routes/awards/awardRoutes.js');
app.use('/awards', awards);

/* Rutas de los grupos */
const group = require('./routes/group/groupRoutes.js');
app.use('/', group);

/* Rutas de los comentarios */
const comments = require('./routes/comments/comments.js');
app.use('/', comments);

/* Acme challenge */
app.use('/.well-known/acme-challenge/', express.static('./.well-known/acme-challenge/'));

/* Arrancar servidor en el puerto 3000 */
app.listen(PORT, () => {
    console.log(`Servidor escuchando por el puerto ${PORT}`);
});
