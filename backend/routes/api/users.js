const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Booking, Car, Image } = require('../../db/models');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];

router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
    user,
    });
  }),
);

router.get('/profile/:id(\\d+)', asyncHandler(async(req, res) => {
  const { id } = req.params;
  const usersBooking = await Booking.findAll({
    include:[{model: Car}],
    where: {
      userId: id
    } 
  });

  if (!usersBooking) {
        const err = new Error('Could not find any bookings.');
        err.status = 401;
        err.title = 'Profile';
        err.errors = ['Could not find existing bookings'];
        return next(err);
  } 

   res.json(usersBooking);
}));

module.exports = router;