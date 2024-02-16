const express = require('express');
const router = express.Router();
const fileController = require('../controller/fileController');
const fileUploadMiddleware = require('../middleware/fileUploadMidelware');
const authenticationMiddleware = require('../middleware/authMiddelware');  

router.post('/upload', authenticationMiddleware, fileUploadMiddleware.single('file'), fileController.uploadFile);
router.get('/list', authenticationMiddleware, fileController.listFiles);
router.delete('/delete/:fileId', authenticationMiddleware, fileController.deleteFile);
router.delete('/delete/:fileId', authenticationMiddleware, fileController.deleteFile);
router.post('/generateToken', fileController.generateToken);
router.get('/search',authenticationMiddleware, fileController.searchFiles)

module.exports = router;
