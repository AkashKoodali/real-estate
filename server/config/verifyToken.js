import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({
      message: "You are not authenticated!",
    });
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err)
      return next(
        res.status(403).json({
          message: "Token is not valid!",
        })
      );
    req.user = user;
    next();
  });
};

export default verifyToken;
