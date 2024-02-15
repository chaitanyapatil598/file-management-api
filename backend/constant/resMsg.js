 const RES_MSG = {
    COMMON: {
      CASES_UPDATED: 'case status updated successfully',
      CASES_REJECTED: 'Cases has been rejected',
      CASES_APPROVAL: 'Cases sent for approval',
      OK: 'OK',
      NUMBER_OF_CASES: 'Number of cases has been released',
      FILE_PROCESSING:"This file is being processed. Please wait until processing is complete",
      ACKNOWLEDGED: 'Acknowledged',
      INVALID_FILE:"Invalid file",
      INVALID_DATA_FORMATE:"Invalid data format",
      FILE_DOWNLOADE_ISSUE:"The file is unable to be downloaded due to the rejection of all the records.",
      NO_DATA_FOUND: 'No data found',
      SOURSE_SYSTEM: 'Request failed',
      FILE_ERR: 'Please Add values in file.',
      FILE_NOT_FOUND: 'File not found',
      CONSENT_NOT_PROVIDED: 'Consent not provided by user',
      LIMIT_REACHED: 'Limit reached',
      TXN_FAILURE: 'Transaction Failure',
      TXN_EXISTS: 'Transaction Exists',
      CLIENT_NOT_EXIST: 'Client does not exist',
      FILE_DOWNLOAD: 'File Downloaded succesfully',
      STATUS_UPDATE: 'Status Updated',
      DUPLICATE_USER_CODE: 'Duplicate User Code Found',
      INTERNAL_SERVER_ERROR: 'Internal Server Error',
      CASES_ALREADY_PROCEED: 'These cases are already processed.',
      NO_TOKEN: 'Missing token',
      INVALID_TOKEN: 'Invalid token',
      ALL_ITEMS_PROCESSED: 'all items have been processed',
      FILE_UPLOAD_SUCCESS: 'File uploded succesfully',
      ERROR_IN_READINGFILE:"Error reading file",
      ERROR_IN_DOWNLOADINGFILE:"Error downloading file from S3",
      ERROR_IN_DOWNLOADINGFILE_R:"Error downloading Report",
      ACCOUNT_VALIDATE:"Account Validate",
      INTERNAL_SERVER_ERR:"Internal sever error",
      CONFORM_FILE_FORMATE:"Please confirm file format!",
      ALL_ITEMS_PROCESSED_MSG:"This file is being processed. Please wait until processing is complete",
      IN_PROCESS:"in-process",
      HEADER_NOT_FOUND: "Headers cannot be blank",
      FAIL_TO_RETRIVE_DATA:"Failed to retrieve data",
      BAD_REQUEST: "Bad Request",
      UNAUTHORIZED:"UNAUTHORIZED",
      DUPLICATE_BATCHID:"Duplicate batchId",
      DUPLICATE_RECORDS_FOUND:"Duplicate Records Found",
      AUTHORIZATION_ERROR:"Missing Token or UserId",
      EMAIL_SEND_SUCCESSFULLY:"Email sent successfully",
      SUCCESS:"success",
      FILE_DELETE:"File deleted successfully"
      
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