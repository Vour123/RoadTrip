const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const carsRouter = require('./cars.js');
const bookingsRouter = require('./bookings.js');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/cars', carsRouter);
router.use('/bookings', bookingsRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;

