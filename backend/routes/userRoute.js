import express from 'express';
import User from '../models/User';
import protect from '../middleware/auth';
const router = express.Router();

// Protected Route to Get User Profile
router.get('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
