// const express = require("express")
// const { getAllproduct, CreatProduct, updateProduct, deleteProduct, getSingleproduct } = require("../controller/productController")

// const router = express.Router()


// router.route("/product").get(getAllproduct)
// router.route("/product/new").post(CreatProduct)
// router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getSingleproduct)
// module.exports = router


const express = require('express');
const router = express.Router();
const fileController = require('../controller/fileController');
const fileUploadMiddleware = require('../middleware/fileUploadMidelware');
const authenticationMiddleware = require('../middleware/authMiddelware');  // If implementing authentication

router.post('/upload', authenticationMiddleware, fileUploadMiddleware.single('file'), fileController.uploadFile);
router.get('/list', authenticationMiddleware, fileController.listFiles);
router.delete('/delete/:fileId', authenticationMiddleware, fileController.deleteFile);


module.exports = router;
