# CipherSchools-Social-Media.

- Welcome to CipherSchools Social Media! This is a social media web app built with Node.js, Express, and MongoDB. It's easy to use and understand. This README provides an overview of the project, how to set it up, and how to use it.

## What It Can Do
- Our app has a few cool features:

- User Registration: You can create an account and log in. 

- Create Posts: Share your thoughts, pictures, and ideas with others.

- Comments: You can comment on posts.

- Retrieve Posts: Check out posts from other users.

- User-Specific Posts: See posts from a specific user.

## What You Need
- Before you get started, make sure you have the following:

## Node.js and npm installed.
- MongoDB database set up and running.

-  Postman for testing the API (if you want).
 
## Quick Setup
- Clone the project: Download the project by running git clone https://github.com/vikassharmakolhua/CipherSchools-Social-Media.git.
- Install Dependencies: Run npm install to get all the necessary packages.
- Set Up Environment: Create a file called .env and put in your database connection info and JWT secret key.
- Start the Server: Run npm start to get the server going. You'll find it at http://localhost:3000.
  How It's Organized
- We've structured this project neatly:

- models/: Database models (User, Post, Comment).
- controllers/: Code for handling routes.
- routes/: API route definitions.
- middleware/: Authentication and error handling.
## Explore the API
### We've got a bunch of API endpoints to help you:

- Register: /api/users/register
- Log In: /api/users/login
- Create a Post: /api/posts/create
- Get All Posts: /api/posts/all
- Get User's Posts: /api/posts/user/:userId
- Delet Post's Owner: /api/posts/:postID
- Find Posts by Hashtags: /api/posts/hashtag/:hashtag
- Add a Comment: /api/comments/create/:postId
- All Comments of a Post:/api/comments/post/:postID
- Delete Comment's Owner: /api/comments/:commentID

## User Authentication
- You'll need to register and log in to use some features. We secure it all using JWT tokens.

## Testing with Postman
- If you want to test our app using Postman, we have a Postman collection you can use. Just set the headers right and include your JWT token for protected routes.

## Extra Features
- Feel free to get creative! You can add more features like user comments, likes, or reposts to make our social media app even better.


## License
- This project is open-source and is licensed under the MIT License.

- We hope you enjoy using CipherSchools Social Media. If you have any questions or need help, feel free to reach out!
