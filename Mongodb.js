const express = require("express");
const mongoose = require("mongoose");

// MongoDB connection string
// const DATABASE_URL = "mongodb+srv://shubham:27378283@shubhamcluster.3rxre.mongodb.net/C";
const DATABASE_URL =
  "mongodb+srv://shubham:27378283@shubhamcluster.3rxre.mongodb.net/D";

// Connect to MongoDB
mongoose
  .connect(DATABASE_URL)
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log("DB connection error:", err));

// Define schema and model
const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    default: null,
  },
});

const Question = mongoose.model("Question", questionSchema);

// Initialize Express app
const app = express();
app.use(express.json()); // Middleware to parse JSON

// POST route to save a question
app.post("/", async (req, res) => {
  const { text, response } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Question text is required" });
  }

  try {
    const newQuestion = new Question({ text, response });
    await newQuestion.save();
    res
      .status(201)
      .json({ message: "Question saved successfully", question: newQuestion });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to save question", details: error.message });
  }
});

// GET route to fetch all questions
app.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    console.log(questions);
    res.status(200).json(questions);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch questions", details: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
