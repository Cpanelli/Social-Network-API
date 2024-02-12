const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");

const thoughtSchema = new Schema({
  thoughtText: String,
  username: String,
  reactions: [Reaction.schema],
  createdAt: { type: Date, default: Date.now },
});

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
