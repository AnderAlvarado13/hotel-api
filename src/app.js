const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const authRoutes = require('./routes/auth.routes');
const reservationRoutes = require('./routes/reservation.routes');
const guestRoutes = require('./routes/guest.routes');
const { errorHandler } = require('./middleware/error.middleware');

// Configuración de bodyParser para parsear solicitudes JSON
app.use(bodyParser.json());

// Configuración de Morgan para logging de solicitudes HTTP
app.use(morgan('dev'));

// Rutas
app.use('/api', authRoutes);
app.use('/api', reservationRoutes);
app.use('/api', guestRoutes);

// Middleware para manejar errores
app.use(errorHandler);

module.exports = app;
