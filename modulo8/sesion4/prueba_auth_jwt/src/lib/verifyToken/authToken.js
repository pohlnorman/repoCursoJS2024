import jwt from 'jsonwebtoken';

// Middleware para verificar el token JWT
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Se requiere un token para acceder' });
    }

  // Verificar el token
    jwt.verify(token, 'mi_secreto_jwt', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido o expirado' });
        }

    // Si el token es válido, almacenamos la información del usuario en `req.user`
    req.user = decoded;
    next();
    });
};

export default verifyToken;
