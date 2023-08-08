const seedDatabase = async () => {
  try {
    // Ensure database connection and table schema are created
    await sequelize.sync();

    // Drop tables in the correct order: Comments, Posts, User
    await Comment.destroy({ truncate: true });
    await Post.destroy({ truncate: true });
    await User.destroy({ truncate: true });

    // Seed users
    await User.bulkCreate(userData);

    // Seed posts
    await Post.bulkCreate(postData);

    // Seed comments
    await Comment.bulkCreate(commentData);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

