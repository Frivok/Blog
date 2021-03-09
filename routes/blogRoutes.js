const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.get("/create", blogController.blog_create_get);
router.get("/search", blogController.blog_search);
router.get("/", blogController.blog_index);
router.post("/", blogController.blog_create_post);
router.get("/:slug", blogController.blog_details);
router.delete("/:slug", blogController.blog_delete);

module.exports = router;
