// config
import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;


// user routes
import userRoutes from './routes/userRoute';
app.use('/app', userRoutes);
//



// run server
app.listen(PORT, () => {
    console.log(`Servidor escuchando por el puerto${PORT}`);
});






