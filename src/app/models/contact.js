const { Schema } = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength = [2, "Name must be at least 2 characters."],
    maxLength = [100, "Name must be less than 100 characters."],

  },
  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please enter a valid email."]
  },

  message: {
    type: String,
    required: [true, "Message is required."],
    minLength = [10, "Message must be at least 10 characters."],
    maxLength = [500, "Message must be less than 500 characters."],
  },
  }
});


// back to 26;31
