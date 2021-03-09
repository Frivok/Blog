const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var slug = require("mongoose-slug-generator");

// initialize
mongoose.plugin(slug);

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    //Define the slug parameters
    slug: {
      type: String,
      slug: "title",
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      default: Date.parse,
    },
  },
  {
    timestamps: {
      type: Date,
      default: Date.now,
    },
  }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
