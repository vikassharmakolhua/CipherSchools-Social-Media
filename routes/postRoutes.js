const express = require('express');
const router = express.Router();
 const postController = require('../controllers/postController');
 const auth = require('../middleware/authMiddleware');

 router.post('/create',auth,postController.createPost);

 router.get('/all',postController.getAllPosts);


router.get('/user/:userId', postController.getPostByUser);

 router.delete('/:postId',auth,postController.deletePost);


module.exports = router;