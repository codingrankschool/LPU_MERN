const jwt = require("jsonwebtoken");

const authMiddleware = {
  // Authentication Middleware
  authT: async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

      // Check if Authorization header exists
      if (!authHeader) {
        return res.status(401).json({
          status: false,
          msg: "Authorization header is missing.",
        });
      }

      // Check Bearer Token
      if (!authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
          status: false,
          msg: "Invalid token format.",
        });
      }

      // Extract Token
      const token = authHeader.split(" ")[1];

      // Verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Store logged-in user information
      req.user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({
        status: false,
        msg: "Invalid or Expired Token.",
        error: error.message,
      });
    }
  },

  // Authorization Middleware
  authR: (...roles) => {
    return (req, res, next) => {
      if (!req.user) {
        return res.status(401).json({
          status: false,
          msg: "Unauthorized",
        });
      }

      if (!roles.includes(req.user.role)) {
        return res.status(403).json({
          status: false,
          msg: "Access Denied",
        });
      }

      next();
    };
  },
};

module.exports = authMiddleware;
