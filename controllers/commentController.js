const Comment = require('../models/comment');

// create a new comment
exports.createComment = async (req,res) => {
    try {
        // const {text} = req.body;
        // const {postId} = req.params;
        // const user = req.user;
        const {user,post,text}=req.body;

        const comment = new Comment({
            text,
            user,
            post,

        });

        await comment.save();
        res.status(201).json({message: "Comment created successfully", comment});

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
};

// Retrieve all comments for a post
exports.getCommentsForPost = async (req,res) => {
    try{
        const postId = req.params.postId;
        const comments = await Comment.find({post: postId});
        res.status(200).json(comments);
    } catch(error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }

};


// Delete a comment (only  by the user who created it)

exports.deleteComment = async (req,res) => {
    try {
        const commentId = req.params.commentId;
        const user = req.user;
        
        const comment = await Comment.findOne({_id: commentId});

        if(!comment)
        {
            return res.status(404).json({message: "comment not found"});
        }

        if(comment.user.toString()!== user.userId.toString()) {
            return res.status(403).json({message: "Unauthorized"});
        }
        await Comment.deleteOne({ _id: commentId }); 
       // await comment.remove();
        res.status(200).json({mesage: 'Comment deleted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
};