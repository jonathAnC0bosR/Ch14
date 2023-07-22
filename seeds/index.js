const seedUsers = require('./user-seeds');
const seedBlogs = require('./blog-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    
    await seedUsers();
    console.log('Users seeded');

    await seedBlogs();
    console.log('Blogs seeded');

    await seedComments();
    console.log('Comments seeded');

    process.exit(0);
};

seedAll();
