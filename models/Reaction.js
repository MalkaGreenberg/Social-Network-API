const { Schema, Types } = require('mongoose');

const ReactionSchema = Schema({
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toDateString(), // Format timestamp using a getter
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
  );
  
  module.exports = ReactionSchema;