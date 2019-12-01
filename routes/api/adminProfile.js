const express = require('express');
const router = express.Router();
const auth = require('../../middleware/adminAuth');

const adminProfile = require('../../models/AdminProfile');
const adminUser = require('../../models/AdminUser');

// @route  GET api/profile/me
// @desc   Get curren users profile
// @access Private

router.get('/admin', auth, async (req, res) => {
  try {
    const adminProfile = await AdminProfile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'avatar']);

    if (!adminProfile) {
      return res.status(400).json({
        msg: 'There is no profile for this user'
      });
    }

    res.json(adminProfile);
  } catch (err) {
    console.error(err, message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
