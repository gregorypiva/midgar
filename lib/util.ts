const httpStatus = require("http-status");

const createSuccessResponse = (res: any, body: any, status?: any, message?: any) => {
  status = status || httpStatus.OK;
  message = message || httpStatus["200_MESSAGE"];
  return res.status(status).json(body);
}

const createErrorResponse = (res: any, status: any, message: any) => {
  return res.status(status).json({status, message});
}

export const util = {
  createSuccessResponse,
  createErrorResponse
}