const { ensureAuthenticated } = require("../middleware/checkAuth");
import express from "express";
import * as database from "../controller/postController";
const router = express.Router();

router.get("/list", async (req, res) => {
  const subgroups = database.getAllSubgroups();
  res.render("subs", { subgroups, user: req.user });
});

router.get("/show/:subname", async (req, res) => {
  const posts = database.getPostsBySubgroup(req.params.subname);
  res.render("sub", { posts, subgroupName: req.params.subname, user: req.user });
});

export default router;
