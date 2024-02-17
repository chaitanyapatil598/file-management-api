const jwt = require('jsonwebtoken');
require('dotenv').config({path:"backend/configration/config.env"})
const { ResponseHandler, MastersResponseBody } = require('../../backend/utils/responseHandler') 
const responseHandler = new ResponseHandler()
const { RES_CODE, RES_MSG} = require('../../backend/constant/resMsg') 

function authenticationMiddleware(req, res, next) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return responseHandler.MasterHandleBody(
      new MastersResponseBody(RES_CODE.UNAUTHORIZED, RES_MSG.COMMON.UNAUTHORIZED_MISSING_HEADER),
      res
    );
  }
  // Here verify and decode the JWT token
  jwt.verify(authToken, process.env.SECRETE_KEY, (err, decoded) => {
    if (err) {
      return responseHandler.MasterHandleBody(
        new MastersResponseBody(RES_CODE.UNAUTHORIZED, RES_MSG.COMMON.UNAUTHORIZED),
        res
      );
    }
    req.user = decoded;
    next();
  });
}

 module.exports = authenticationMiddleware;

