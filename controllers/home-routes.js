const express = require('express');
const { commentController, blogController, userController } = require('../controllers');

const router = express.Router();

// Define your routes and associate them with the appropriate controllers
router.get('/comments', commentController.getAllComments);
router.post('/comments', commentController.createComment);
router.put('/comments/:id', commentController.updateComment);
router.delete('/comments/:id', commentController.deleteComment);

router.get('/blogs', blogController.getAllBlogs);
router.post('/blogs', blogController.createBlog);
router.put('/blogs/:id', blogController.updateBlog);
router.delete('/blogs/:id', blogController.deleteBlog);

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
