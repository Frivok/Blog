const express = require("express");
const authController = require("../controllers/blogController");

const router = express.Router();

router.get("/login", blogcontroller.login_get);
