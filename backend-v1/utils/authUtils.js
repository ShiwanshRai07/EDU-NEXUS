import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader)
    return res.status(401).json({ message: "Access denied. No token" });
  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Invalid token format" });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.user = verified; 
		//attach user data to the req (userId,username);
		console.log(verified)
    next(); // goto next middleware
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

export default authenticateToken;