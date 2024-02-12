const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3002;

const User = require("./models/User");
const Thought = require("./models/Thought");
const Reaction = require("./models/Reaction");

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/social-network-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleUsers = [
  { username: "john_doe", email: "john@example.com" },
  { username: "jane_doe", email: "jane@example.com" },
];

const sampleThoughts = [
  { thoughtText: "This is a sample thought by John.", username: "john_doe" },
  { thoughtText: "Another sample thought by Jane.", username: "jane_doe" },
];

const initializeSampleData = async () => {
  try {
    await User.deleteMany();
    await Thought.deleteMany();

    const createdUsers = await User.create(sampleUsers);
    const createdThoughts = await Thought.create(sampleThoughts);

    console.log("Sample data initialized:", createdUsers, createdThoughts);
  } catch (error) {
    console.error("Error initializing sample data:", error);
  }
};

initializeSampleData();

app.get("/", (req, res) => {
  res.send("Welcome to the Social Network API!");
});

app.use(require("./apiRoutes")); // Include the apiRoutes.js

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
