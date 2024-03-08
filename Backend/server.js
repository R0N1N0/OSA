const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para habilitar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permitir solicitudes desde cualquier origen
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Permitir los métodos HTTP especificados
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Permitir los encabezados especificados
    next();
});

// Middleware global

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json( {message: "Hola que tal"} );
});

// Rutas de usuario
const userRoutes = require('./routes/user/userRoute.js');
app.use('/', userRoutes);

// Rutas de maquinas

const mvRoutes = require('./routes/mv/mv.js');
app.use('/', mvRoutes);

// run server
app.listen(PORT, () => {
    console.log(`Servidor escuchando por el puerto ${PORT}`);
});




