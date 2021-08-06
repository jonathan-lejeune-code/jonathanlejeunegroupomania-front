const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const postCtrl = require('../controllers/post');

// Routes Posts
router.post('/', auth, multer,postCtrl.createPost);
router.put('/:id', auth, multer,postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);
router.get('/:id', auth, postCtrl.getOnePost);
router.get('/', auth, postCtrl.getAllPosts);	

// Routes Commentaires
router.post('/', auth, multer,postCtrl.createComment);
router.put('/:id', auth, multer,postCtrl.modifyComment);
router.delete('/:id', auth, postCtrl.deleteComment);
router.get('/:id', auth, postCtrl.getOneComment);
router.get('/', auth, postCtrl.getAllComments);	

module.exports = router;
