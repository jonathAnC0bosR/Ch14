const { Blog } = require('../models');

const blogData = [
    {
        title: 'My first blog post',
        content: 'This is my first blog post',
        user_id: 1 // assuming the user with id 1 exists
    },
    {
        title: 'Another blog post',
        content: 'This is another blog post',
        user_id: 2 // assuming the user with id 2 exists
    },
    // more blogs as needed
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
