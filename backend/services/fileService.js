const fileModel = require('../models/fileModel');
const encryptionService = require('./../services/encryptService');
const cachingService = require('../../backend/services/catchingService');
async function saveFile(fileData) {
  // Simulated encryption for demonstration purposes
  const encryptedData = encryptionService.encrypt(fileData.buffer);

  const savedFile = await fileModel.create({
    originalName: fileData.originalname,
    mimeType: fileData.mimetype,
    size: fileData.size,
    data: encryptedData,
  });

  // Simulated caching for demonstration purposes
  cachingService.cacheFile(savedFile);

  return savedFile;
}

async function getFiles() {
  // Simulated caching for demonstration purposes
  const cachedFiles = cachingService.getCachedFiles();

  if (cachedFiles) {
    return cachedFiles;
  }

  const files = await fileModel.find();
  cachingService.cacheFiles(files);

  return files;
}

async function deleteFile(fileId) {
  // Simulated caching for demonstration purposes
  cachingService.clearCache();

  await fileModel.findByIdAndDelete(fileId);
}

module.exports = {
  saveFile,
  getFiles,
  deleteFile,
};
