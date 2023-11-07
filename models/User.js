const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    },
    thoughts:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    friends:[
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Define a virtual property "friendCount" on the user schema
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User  = model('User', userSchema);

module.exports = User;
