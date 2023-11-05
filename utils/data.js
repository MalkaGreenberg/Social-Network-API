
const data = {
  users: [
    {
      username: "user1",
      email: "user1@example.com",
    },
    {
      username: "user2",
      email: "user2@example.com",
    },
    // Add more user data here
  ],
  thoughts: [
    {
      thoughtText: "Thought 1",
      username: "user1",
      reactions: [
        {
          reactionBody: "Reaction 1 to Thought 1",
          username: "user2",
        },
      ],
    },
    {
      thoughtText: "Thought 2",
      username: "user2",
      reactions: [
        {
          reactionBody: "Reaction 1 to Thought 2",
          username: "user1",
        },
      ],
    },
    // Add more thought data here
  ],
};

module.exports = data;
