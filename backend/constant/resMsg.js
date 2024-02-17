 const RES_MSG = {
    COMMON: {
      FILE_UPLOAD_SUCCESS: 'File uploded succesfully',
      AUTHORIZATION_ERROR:"Missing UserId",
      EMAIL_SEND_SUCCESSFULLY:"Email sent successfully",
      SUCCESS:"success",
      TOKEN_GEN_SUCCESSFULLY:"Token generate successfully",
      FILE_DELETE:"File deleted successfully",
      UNAUTHORIZED_MISSING_HEADER:"Unauthorized - Missing Authorization Header",
      UNAUTHORIZED:"Unauthorized - Invalid Token",
      FILE_NOT_UPLOAD: 'File Not Upload',
      FILE_SEARCH_SUCCESS:"file Found!",
      NO_DATA_FOUND:"No data found"
    }
  }
  
   const RES_CODE = {
    200: 200,
    403: 403,
    422:422,
    UNAUTHORIZED: 401,
    409:409,
    500: 500,
    404: 404,
    400: 400,
    501: 501
  }
  
   const RES_STATUS = {
    true: true,
    false: false
  }
  
  module.exports = {
    RES_CODE,
    RES_STATUS,
    RES_MSG
  }