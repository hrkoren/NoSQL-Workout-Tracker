const router = require('express').Router();
const apiRoutes = require('./api');
const Workout = require('./api/workouts');

router.use('/api', apiRoutes);

module.exports = router;