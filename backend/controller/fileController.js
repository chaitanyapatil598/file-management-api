const catchAsyncErrors = require("../middleware/catchAsyncError")
const fileModel = require('../models/fileModel');
const fileService = require('../services/fileService');
const { ResponseHandler, MastersResponseBody } = require('../../backend/utils/responseHandler') 
const responseHandler = new ResponseHandler()
const { RES_CODE, RES_MSG} = require('../../backend/constant/resMsg') 
const authService = require("../services/authService")

//this Api use for upload file
const uploadFile = catchAsyncErrors(async (req, res, next) => {
  const fileData = req.file;

  if (!fileData) {
    return responseHandler.MasterHandleBody(
      new MastersResponseBody(RES_CODE[400], RES_MSG.COMMON.FILE_NOT_UPLOAD),
      res
    );
  }
  const savedFile = await fileService.saveFile(fileData);
  return responseHandler.MasterHandleBody(
    new MastersResponseBody(RES_CODE[200], RES_MSG.COMMON.FILE_UPLOAD_SUCCESS, savedFile),
    res
  );
});

//this Api use for get fileList
const listFiles = catchAsyncErrors(async (req, res, next) => {
  const files = await fileService.getFiles();
  return responseHandler.MasterHandleBody(
    new MastersResponseBody(RES_CODE[200], RES_MSG.COMMON.SUCCESS, {
      data: files,
      Count: files.length,
    }),
    res
  );
});

//this Api use for delete file data on the basis of FileId
const deleteFile = catchAsyncErrors(async (req, res, next) => {
  const fileId = req.params.fileId;
  await fileService.deleteFile(fileId);
  return responseHandler.MasterHandleBody(
    new MastersResponseBody(RES_CODE[200], RES_MSG.COMMON.FILE_DELETE),
    res
  );
});
//token generate
const generateToken =catchAsyncErrors (async (req, res, next) => {
  try {
    const userId = req.query.userId;
    // Validate if userId is missing or falsy
    if (!userId) {
      return responseHandler.MasterHandleBody(
        new MastersResponseBody(RES_CODE[400], RES_MSG.COMMON.AUTHORIZATION_ERROR),
        res
      );
    }
    const userPayload = { userId };
    const token = await authService.generateToken(userPayload);
    return responseHandler.MasterHandleBody(
      new MastersResponseBody(RES_CODE[200], RES_MSG.COMMON.TOKEN_GEN_SUCCESSFULLY,{token:token}),
      res
    );
  } catch (error) {
    return next(error);
  }
});

//searchFiles
const searchFiles = catchAsyncErrors(async (req, res) => {
  try {
    const query = req.query.q; // Assuming the search query is provided in the request query parameter 'q'
    const result = await fileModel.find({ originalName: new RegExp(query, 'i') });
    if (result.length === 0) {
      return responseHandler.MasterHandleBody(
        new MastersResponseBody(RES_CODE[404], RES_MSG.COMMON.NO_DATA_FOUND),
        res
      );
    }else{
      return responseHandler.MasterHandleBody(
        new MastersResponseBody(RES_CODE[200], RES_MSG.COMMON.FILE_SEARCH_SUCCESS, result),
        res
      );
    }
  
  } catch (error) {
    console.log("Err",error)
  }
});

module.exports = {
  uploadFile,
  listFiles,
  deleteFile,
  generateToken,
  searchFiles
};
