const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { secretKey } = require('../config/auth.config');

// Middleware para verificar el token JWT
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });
  }

  jwt.verify(token, secretKey, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido.' });
    }

    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  });
}

module.exports = {
  verifyToken,
};
