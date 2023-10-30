const Post =require('../models/post');
// create a new post
exports.createPost = async (req,res) => {
    try {
        const {user,post_text,image_links,hashtags} =req.body;

        //const user = req.user;
        const post = new Post({
              user,
            post_text,
            image_links,
            hashtags,
          

        });

        await post.save();
        res.status(201).json({ message: 'Post created Successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
};

// Retrieve all posts
exports.getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
};

// Retrieve posts by a specific user
exports.getPostByUser = async (req,res) => {
    try{
        const userId = req.params.userId;
        const posts= await Post.find({user: userId});
        res.status(200).json(posts);
    } catch(error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }

};

// Delete a post (only by the user who created it)

exports.deletePost = async (req,res) => {
    try {
        const postId = req.params.postId;
        const user = req.user;

        const post = await Post.findOne({_id: postId});

        if(!post){
            return res.status(404).json({message: 'Post not found'});

        }

        if(post.user.toString() !== user.userId.toString())
        {
            return res.status(403).json({message: "Unauthorized"});
        }

        await Post.deleteOne({ _id: postId }); 
        return res.status(200).json({message: "Post deleted successfully",user});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }

};
