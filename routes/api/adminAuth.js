const express = require('express');
const router = express.Router();
const auth = require('../../middleware/adminAuth');

const User = require('../../models/adminUser');

// @route   GET api/adminAuth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
