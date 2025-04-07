import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {
  getUserByEmailIdAndPassword,
  getUserById,
} from "../controller/userController";

// Yagayya 
interface User {
  id: number;
  uname: string;
  password: string;
}

// Local strategy login
const localLogin = new LocalStrategy(
  {
    usernameField: "uname",
    passwordField: "password",
  },
  async (uname: string, password: string, done) => {
    try {
      const user = await getUserByEmailIdAndPassword(uname, password);
      if (!user) {
        return done(null, false, {
          message: "Your login details are not valid. Please try again.",
        });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
);

// Serialize user for the session
passport.serializeUser<number>((user: User, done) => {
  done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser<number>(async (id: number, done) => {
  try {
    const user = await getUserById(id);
    if (!user) {
      return done({ message: "User not found" }, null);
    }
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
});

export default passport.use(localLogin);

/*
router.get("/edit/:postid", ensureAuthenticated, async (req, res) => {
  try {
    const postId = Number(req.params.postid);
    const post = getPost(postId);

    if (!post) {
      return res.status(404).render("error", {
        message: "Post Not found",
        user: req.user,
      });
    }

    res.render("editPost", {
      post,
      formData: req.body,
      user: req.user,
    });
  } catch (err) {
    console.error("Error fetching post for edit:", err);
    res.status(500).render("error", {
      message: "Unable to retrieve post for editing",
      user: req.user,
    });
  }
});

router.post("/edit/:postid", ensureAuthenticated, async (req, res) => {
  try {
    const postId = Number(req.params.postid);
    const { title, link, description, subgroup } = req.body;

    if (!title || !link || !description || !subgroup) {
      const post = getPost(postId);
      return res.render("editPost", {
        error: "All fields are required",
        post,
        formData: req.body,
        user: req.user,
      });
    }

    editPost(postId, title, link, description, subgroup);
    res.redirect("/posts/show/" + postId);
  } catch (err) {
    console.error("Error editing post:", err);
    res.status(500).render("error", {
      message: "Failed to edit post",
      user: req.user,
    });
  }
});
*/