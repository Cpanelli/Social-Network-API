# Social Network API

This is a RESTful API for a simple social network, built using Node.js, Express.js, and MongoDB (with Mongoose).

## Features

- **User Management**: Create, read, update, and delete user profiles.
- **Thought Management**: Create, read, update, and delete thoughts. Users can also react to thoughts.
- **Friendship**: Users can add other users as friends.

## Installation

1. Clone the repository:

git clone https://github.com/Cpanelli/Social-Network-API.git

2. Install dependencies:

cd social-network-api
npm install

3. Set up MongoDB:

Install MongoDB locally or set up a remote MongoDB instance.
Update the MongoDB connection URL in app.js with your database URL.

4. Run the server:

   npm start

## Usage

API Endpoints
GET /api/users: Get all users.
GET /api/users/:id: Get a single user by ID with populated thoughts and friends data.
POST /api/users: Create a new user.
PUT /api/users/:id: Update a user by ID.
DELETE /api/users/:id: Delete a user by ID.
GET /api/thoughts: Get all thoughts.
GET /api/thoughts/:id: Get a single thought by ID.
POST /api/thoughts: Create a new thought.
PUT /api/thoughts/:id: Update a thought by ID.
DELETE /api/thoughts/:id: Delete a thought by ID.
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a though

## Examples

1. Create a User

curl -X POST -H "Content-Type: application/json" -d '{"username":"john_doe","email":"john@example.com"}' http://localhost:3002/api/users

2. Get All Users

curl http://localhost:3002/api/users

## Sample Data

The API is initialized with sample users and thoughts on startup. You can find the sample data initialization in app.js.

## Dependencies

Express.js: ^4.17.1
Mongoose: ^5.13.3

## License

This project is licensed under the MIT License - see the LICENSE file for details.






