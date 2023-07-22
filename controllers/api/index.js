const router = require('express').Router();
const blogRoutes = require('./blogController');
const userRoutes = require('./userController');
const commentRoutes = require('./commentController');

router.use('/blogs', blogRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
