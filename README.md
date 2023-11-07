# Social-Network-API

This project is a Social Networking API that allows users to share their thoughts, react to friends' thoughts, and manage their friend lists.

It is built using Express.js for routing and MongoDB as the database, with Mongoose as the Object Data Modeling (ODM) library.

## Table of Contents

- [API Routes](#api-routes)
- [Walkthrough Video](#walkthrough-video)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

### API Routes

- `/api/users`
  - `GET` all users
  - `GET` a single user by `_id` with populated thought and friend data
  - `POST` a new user
  - `PUT` to update a user by `_id
  - `DELETE` to remove a user by `_id (bonus: remove associated thoughts)

- `/api/users/:userId/friends/:friendId`
  - `POST` to add a new friend to a user's friend list
  - `DELETE` to remove a friend from a user's friend list

- `/api/thoughts`
  - `GET` to get all thoughts
  - `GET` to get a single thought by `_id`
  - `POST` to create a new thought (update the user's thoughts array field)
  - `PUT` to update a thought by `_id
  - `DELETE` to remove a thought by `_id`

- `/api/thoughts/:thoughtId/reactions`
  - `POST` to create a reaction stored in a thought's reactions array field
  - `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

### Walkthrough Video

Please refer to the walkthrough [video](https://drive.google.com/file/d/1MyZTWflaEjgzSlPSAikfxWaqO4j9MLOg/view?usp=sharing) demonstrating the functionality of this API.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Seed the database: `npm run seed`.

## Usage

1. Start the server: `npm run start`
2. Use a tool like Insomnia to test the API routes for creating and managing users, thoughts, reactions, and friends.
3. Refer to the API Routes section for available endpoints and actions.

[screenshot1](assets/Screenshot1.png)

[screenshot2](assets/Screenshot2.png)

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the [License Name] License - see the [LICENSE.md](LICENSE.md) file for details.
