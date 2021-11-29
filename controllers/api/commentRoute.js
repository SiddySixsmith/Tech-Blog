const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utilities/auth");

router.post("/", withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      text: req.body.text,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    })
      .then((CommentData) => res.json(CommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

module.exports = router;
