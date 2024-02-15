const multer = require('multer');

const storage = multer.memoryStorage();
const fileUploadMiddleware = multer({ storage });

module.exports = fileUploadMiddleware;