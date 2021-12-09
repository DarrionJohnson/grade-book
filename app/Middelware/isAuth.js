import  config  from "../config.js";
import jwt from "jsonwebtoken";

export default (req, res, next) => {
  try {
    req.isAuth = jwt.verify(
      req.headers.authorization.split(" ")[1]),
    config.encryption.secret);
    next();
  } catch (error) {}
};
