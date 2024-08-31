const authService = require('../services/auth.service');

// Registro de usuario
async function register(req, res) {
  const { username, email, password } = req.body;
  
  try {
    const user = await authService.registerUser(username, email, password);
    res.status(201).json({ message: 'Usuario, creado exitosamente!', username: user.username});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Login de usuario
async function login(req, res) {
  const { username, password } = req.body;
  try {
    const token = await authService.loginUser(username, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

module.exports = {
  register,
  login,
};
