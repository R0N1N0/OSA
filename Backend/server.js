const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware global

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// user routes
const userRoutes = require('./routes/userRoute.js');
app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.send(`Hola amigos`);
})

// run server
app.listen(PORT, () => {
    console.log(`Servidor escuchando por el puerto ${PORT}`);
});




