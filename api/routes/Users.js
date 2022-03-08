const router = require("express").Router();
const User = require("../models/User");
const post = require("../models/post");
const bcrypt = require('bcrypt');

//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
      }
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      }, { new: true });
      res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
    }
  }
    else {
      res.status(401).json("You can update only ur acc.")
  }
});

//DELETE 
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      
      try {
        await post.deleteMany({ username: User.username });
        await User.findByIdAndDelete(req.params.id);
        
        res.status(200).json("user have been delete...");
      } catch (err) {
        res.status(500).json(err);
      }
    }
    catch (err) {
      res.status(404).json("user not found!")
    }
  } else {
    res.status(401).json("You can delete only ur acc.");
  }
});

//Get User 
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  }
  catch (err)
  {
    res.status(500).json("err occur" + err)
  }
})

module.exports = router;
