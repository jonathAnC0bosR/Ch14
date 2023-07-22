const { Comment } = require('../models');

const commentData = [
    {
        content: 'Great post!',
        user_id: 1, // assuming the user with id 1 exists
        blog_id: 1 // assuming the blog with id 1 exists
    },
    {
        content: 'I disagree',
        user_id: 2, // assuming the user with id 2 exists
        blog_id: 1 // assuming the blog with id 1 exists
    },
    // more comments as needed
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
