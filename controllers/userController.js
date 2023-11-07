const { Thought, User } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find()
        .populate({ path: "thoughts", model: "Thought", select: "-__v" })
        .populate({ path: "friends", select: "-__v" })
        .select("-__v");

      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate({ path: "thoughts", select: "-__v" })
        .populate({ path: "friends", select: "-__v" })
        .select("-__v");


      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      console.log(user.friendCount);

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      return res.json({ message: 'User and thougts deleted!' });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Add a new friend to a user
  async addFriend(req, res) {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    try {
      const user = await User.findOne({ _id: userId})
        .select('-__v');
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      const friend = await User.findOne({ _id: friendId})
      .select('-__v');
      if (!friend) {
        return res.status(404).json({ message: 'No friend with that ID' });
      }

      // check if friend is already in the user's friend list
      if(user.friends.includes({ _id: friendId})) {
        return res.status(404).json({message: 'Friend is already in this friend group'});
      }

      user.friends.push(friendId);
      await user.save();

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Internal server error'});
    }
  },

   // Remove a friend from a user
   async removeFriend(req, res) {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    try {
      const user = await User.findOne({ _id: userId})
        .select('-__v');
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      const friend = await User.findOne({ _id: friendId})
      .select('-__v');
      if (!friend) {
        return res.status(404).json({ message: 'No friend with that ID' });
      }


      user.friends = user.friends.filter((friend) => friend.toString() !== friendId);
      await user.save();

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Internal server error'});
    }
  },
};
