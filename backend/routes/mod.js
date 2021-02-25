const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const modCtrl = require('../controllers/mod');

    router.get('/comments', auth, modCtrl.getAllComments);
    router.get('/posts', auth, modCtrl.getAllPosts);
    router.delete('/comment/:id', auth, modCtrl.deleteComment);
    router.delete('/post/:id', auth, modCtrl.deletePost);


module.exports = router;