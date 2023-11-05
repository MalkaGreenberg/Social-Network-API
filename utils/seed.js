const connection = require('../config/connection');
const { User, Thought } = require('../models');
const data = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Thought.deleteMany();

    // Seed users
    const users = await User.create(data.users);

    // Seed thoughts with references to users
    const thoughts = data.thoughts.map((thoughtData) => {
      const user = users.find((user) => user.username === thoughtData.username);
      thoughtData.username = user._id;
      return thoughtData;
    });

    await Thought.create(thoughts);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    mongoose.connection.close();
  }
});


seedDatabase();


