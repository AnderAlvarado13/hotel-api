const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const authRoutes = require('./routes/auth.routes');
const reservationRoutes = require('./routes/reservation.routes');
const guestRoutes = require('./routes/guest.routes');
const hotelRoutes = require('./routes/hotel.routes');
const roomRoutes = require('./routes/room.routes');
const { errorHandler } = require('./middleware/error.middleware');

// Configuración de bodyParser para parsear solicitudes JSON
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:4200', // Cambia esto al puerto de tu frontend si es diferente
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: true // Si necesitas que las cookies o cabeceras con credenciales se incluyan en las solicitudes
  }));

// Configuración de Morgan para logging de solicitudes HTTP
app.use(morgan('dev'));

// Rutas
app.use('/api', authRoutes);
app.use('/api', reservationRoutes);
app.use('/api', guestRoutes);
app.use('/api', hotelRoutes);
app.use('/api', roomRoutes);

// Middleware para manejar errores
app.use(errorHandler);

module.exports = app;
