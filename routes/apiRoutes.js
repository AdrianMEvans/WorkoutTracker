const app = require("express").Router();
const db = require("../models");

//Obtaining Workout Information
app.get('/api/workouts', (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((WorkoutDb) => {
      res.json(WorkoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get('/api/workouts/range', (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((WorkoutDb) => {
      console.log(WorkoutDb);
      res.json(WorkoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put('/api/workouts/:id', ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post('/api/workouts', (req, res) => {
  db.Workout.create({})
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.delete('/api/workouts', ({ body }, res) => {
  db.Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = app;