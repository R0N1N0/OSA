const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const formData = require('express-form-data');
const cors = require('cors');

// Middleware para habilitar CORS
const allowedSites = ['osaproject.es', '159.223.243.152', 'www.osaproject.es'];
app.use(cors( {origin: allowedSites }));

// Middleware para manejar formdata
app.use(formData.parse());

// Configurar body-parser con un límite más alto
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Middleware global
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Bienvenido a la OSA API" });
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

/* Arrancar servidor en el puerto 3000 */
app.listen(PORT, () => {
    console.log(`Servidor escuchando por el puerto ${PORT}`);
});
