const fileModel = require('../models/fileModel');
const cachingService = require('../../backend/services/catchingService');

async function saveFile(fileData) {
  try {
    const existingFile = await fileModel.findOne({ originalName: fileData.originalname });
    let version = 1;
    if (existingFile) {
      version = existingFile.version + 1;
    }
    // Create a record in the database 
    const savedFile = await fileModel.create({
      originalName: fileData.originalname,
      mimeType: fileData.mimetype,
      size: fileData.size,
      data: fileData.buffer,
      version: version,
    });

    // Simulated caching for demonstration purposes
    cachingService.cacheFile(savedFile);

    return savedFile;
  } catch (error) {
    // Handle errors appropriately
    throw new Error('Error saving file: ' + error.message);
  }
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
