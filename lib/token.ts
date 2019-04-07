const jwt = require("jsonwebtoken");
import {config} from 'midgar';

// Create a token from a payload.
const createToken = (payload: any) => {
  const jwtConfig = {expiresIn: config.jwt.expiresIn};
  return jwt.sign(payload, config.jwt.secretKey, jwtConfig);
}

// Verify the token.
const verifyToken = (token: any) => {
  jwt.verify(token, config.jwt.secretKey, (err: any, decoded: any) => {
    if (err) throw new Error(`${err.name}: ${err.message}`);
    else return decoded;
  });
}

export const token = {
  createToken,
  verifyToken
}