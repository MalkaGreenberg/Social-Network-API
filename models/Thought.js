const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema  = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toDateString(), // Format timestamp using a getter
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema], 
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought  = model('Thought ', thoughtSchema);

module.exports = Thought;
