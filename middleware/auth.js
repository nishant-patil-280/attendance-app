
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header not found' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.username; // add the user information to the request object
    next(); // pass control to the next middleware
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
