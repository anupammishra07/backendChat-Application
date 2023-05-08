const router = require('express').Router();

const {getFriends,messageUploadDB,messageGet,ImageMessageSend,messageSeen,delivaredMessage , shareDocuments , deleteMessage} = require('../controller/messengerController');
const { authMiddleware } = require('../middleware/authMiddleware');
const {upload}=require("../utils/authUtils")
router.get('/get-friends',authMiddleware, getFriends);
router.post('/send-message',authMiddleware, messageUploadDB);
router.get('/get-message/:id',authMiddleware, messageGet);
router.post('/image-message-send',authMiddleware, ImageMessageSend);

router.post('/seen-message',authMiddleware, messageSeen);
router.post('/delivared-message',authMiddleware, delivaredMessage);
 
router.post('/upload-doc',authMiddleware, upload,shareDocuments);
router.delete('/delete-message/:id' ,authMiddleware, deleteMessage );
module.exports = router;