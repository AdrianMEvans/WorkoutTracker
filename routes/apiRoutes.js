const app = require("express").Router();
const db = require("../models");

//Obtaining Workout Information
// app.get('/api/workouts', (req, res) => {
//   db.Workout.aggregate([
//     {
//       $addFields: {
//         totalDuration: {
//           $sum: '$exercises.duration',
//         },
//       },
//     },
//   ])
//     .then((DbWorkout) => {
//       res.json(DbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// app.get('/api/workouts/range', (req, res) => {
//   db.Workout.aggregate([
//     {
//       $addFields: {
//         totalDuration: {
//           $sum: '$exercises.duration',
//         },
//       },
//     },
//   ])
//     .sort({ _id: -1 })
//     .limit(7)
//     .then((DbWorkout) => {
//       console.log(DbWorkout);
//       res.json(DbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// app.put('/api/workouts/:id', ({ body, params }, res) => {
//   db.Workout.findByIdAndUpdate(
//     params.id,
//     { $push: { exercises: body } },
//     { new: true, runValidators: true }
//   )
//     .then((DbWorkout) => {
//       res.json(DbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// app.post('/api/workouts', (req, res) => {
//   db.Workout.create({})
//     .then((DbWorkout) => {
//       res.json(DbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// app.delete('/api/workouts', ({ body }, res) => {
//   db.Workout.findByIdAndDelete(body.id)
//     .then(() => {
//       res.json(true);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

app.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then(DbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
      res.status(400).json(err);
  });
})
// App.get to pull up info for the range page
app.get("/api/workouts/range", ({}, res) => {
db.Workout.find({}).then((DbWorkout) => {
  res.json(DbWorkout);
}).catch(err => {
  res.status(400).json(err);
});
});
// App.post to submit new completed workouts
app.post("/api/workouts/", (req, res) => {
  db.Workout.create(req.body).then((DbWorkout) => {
    res.json(DbWorkout);
  }).catch(err => {
      res.status(400).json(err);
    });
});
// App.put to update workouts by MongoDB _id value and update the exercsise body
app.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    { _id: req.params.id }, { exercises: req.body }
  ).then((DbWorkout) => {
    res.json(DbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
});

module.exports = app;