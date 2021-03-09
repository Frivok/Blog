const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const Blog = require("./models/blog");
const blogRoutes = require("./routes/blogRoutes");
const blogController = require("./controllers/blogController");

const app = express();

const dbURI =
  "mongodb+srv://frivoc:6fgsKEgg9XU!ebwt&wiJ8dP^@cluster0.g9er1.mongodb.net/FrivocBlogDB";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get("/projets", (req, res) => res.render("projects"));

// routes
app.get("/", blogController.blog_index);

app.use("/blogs", blogRoutes);

// 404 page has to be at the bottom
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
