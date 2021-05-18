const router = require('express').Router();
const Workout = require('../../models/workout');

router.get('/api/workouts', (req, res) => {
    db.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post('/api/workouts', ({ body }, res) => {
    db.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get('/api/workouts/range', (req, res) => {
    db.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;