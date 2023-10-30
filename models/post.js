const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users',
        required: true,
    },
    post_text: {
        type: String,
        required:true,
    },
    image_links: [String],
    hashtags:[String],

});

const Post = mongoose.model('Post',postSchema);

module.exports=Post;