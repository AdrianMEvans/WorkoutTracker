const app = require("express").Router();
const db = require("../models");

//Obtaining Workout Information
app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(WorkoutDb => {
        res.json(WorkoutDb);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


//Adding new workouts to Database
app.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body).then((WorkoutDb) => {
      res.json(WorkoutDb);
    }).catch(err => {
        res.status(400).json(err);
      });
  });

//Updating workouts by id
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id }, { exercises: req.body }
    ).then((WorkoutDb) => {
      res.json(WorkoutDb);
    }).catch(err => {
      res.status(400).json(err);
    });
});

//Getting workout range data
app.get("/api/workouts/range", ({}, res) => {
    db.Workout.find({}).then((WorkoutDb) => {
      res.json(WorkoutDb);
    }).catch(err => {
      res.status(400).json(err);
    });
  });

module.exports = app;