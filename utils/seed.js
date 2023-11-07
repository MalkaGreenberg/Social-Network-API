const connection = require('../config/connection');
const { User, Thought } = require('../models');
const data = require('./data');

connection.on('error', (err) => err);

  const seedDatabase = async () => {
    try {
      // Clear existing data
      await User.deleteMany();
  
      // Seed users
      await User.insertMany(data.users);
  
      
      const user = await User.findOne({ username: 'user1' }).populate('thoughts');
      // console.log(user);

      console.log('Database seeded successfully');
    } catch (error) {
      console.error('Error seeding the database:', error);
    } finally {
      connection.close();
    }
  };

  
  seedDatabase();





