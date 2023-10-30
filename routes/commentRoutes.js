const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/authMiddleware');

// create a new comment
 router.post('/create',auth,commentController.createComment);

// Retrieve all comments for a post
router.get('/post/:postId',commentController.getCommentsForPost);

//Delete a comment (only by the user who created it)
 router.delete('/:commentId',auth,commentController.deleteComment);

module.exports = router;