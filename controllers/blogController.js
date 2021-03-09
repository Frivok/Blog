const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/404");
    });
};

const blog_details = (req, res) => {
  // request slug using parameters(params)
  const slug = req.params.slug;

  Blog.findOne({ slug: slug })
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).render("404", { title: "Blog not found" });
    });
};

const blog_create_get = (req, res) => {
  res.render("create", { title: "Create a new Blog" });
};

const blog_create_post = (req, res) => {
  //make a copy of the Blog schema (the body)
  let blog = new Blog(req.body);
  blog.slug = blog.title.replace(" ", "-").toLowerCase();

  blog
    .save()
    .then((result) => {
      res.location(`/blogs/${blog.slug}`);
      res.status(301).send(null);
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/404");
    });
};

const blog_delete = (req, res) => {
  const slug = req.params.slug;
  Blog.findOneAndDelete({ slug: slug })
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
