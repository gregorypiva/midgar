const httpStatus = require("http-status");
import {Server} from 'midgar';
import authService from 'services/authService';

// Handles the requests that attempt to authenticate the user.
const authenticate = async (req: any, res: any, next: any) => {
  try {
    // Attempt to grab the username and password from the request.
    const username = req.body.username || null;
    const password = req.body.password || null;
    if(!username || !password) return invalidLoginRequest(res);
    const token = await authService.authenticate(username, password);
  if (!token) return Server.createErrorResponse(res, httpStatus.UNAUTHORIZED, `Incorrect username or password. ${httpStatus["401_MESSAGE"]}`);
  // We have a valid token so return a success response with a token.
  Server.createSuccessResponse(res, {accessToken: token});
} catch (err) {
    return invalidLoginRequest(res);
  }
}

// Handles auth requests that don't contain the required data: username and password.
function invalidLoginRequest(res: any) {
  const message = `Invalid login request. Must contain a valid username and password. ${httpStatus["400_MESSAGE"]}`;
  // @TODO CR: do not let console.log, use real logger.
  console.log(`invalidLoginRequest( ${message} )`);
  return Server.createErrorResponse(res, httpStatus.BAD_REQUEST, message);
}

const register = async (req: any, res: any, next: any) => {
  // @TODO CR: small optimization 
  if (!req.body) return Server.createErrorResponse(res, httpStatus.BAD_REQUEST, `Invalid register request. Must contain a valid firstName, lastName, username and password. ${httpStatus["400_MESSAGE"]}`);
  const args = req.body;
  try {
    const token = await authService.register(args);
    //if (!token) return util.createErrorResponse(res, httpStatus.BAD_REQUEST, `Cannot register user. ${httpStatus["400_MESSAGE"]}`);
    Server.createSuccessResponse(res, {accessToken: token});
  } catch (e) {
    return Server.createErrorResponse(res, httpStatus.BAD_REQUEST, e);
  }
}

export {
  authenticate,
  register
}