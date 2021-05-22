const router = require('express').Router();
const Workout = require('../../models/workout');
const db = require('../../models');

//get workout route
router.get('/api/workouts', (req, res) => {
    Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//get workout stats of last seven days, sorted descending
router.get('/api/workouts/range', (req, res) => {
    console.log("Hello");
    Workout.find({}).sort('day -1').limit(7).then((data) => {

    })
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
                workoutTotal: { $sum: "$exercises.weight" }
            }
        },
    ])
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ message: error.message });
        });
});

//get workout by id
router.get('/api/workouts/:id', (req, res) => {
    Workout.findOne({ _id: req.params.id })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//post new workout
router.post('/api/workouts', ({ body }, res) => {
    // console.log(body);
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//find and update a workout
router.put('/api/workouts/:id', (req, res) => {
    Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;