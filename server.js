const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
require('dotenv').config();

const PORT = process.env.PORT || 3030;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }
).then(() => {
  // app.listen(PORT, () => {
  //   console.log(`App running ===> visit at port ${PORT}!`);
  // });
  console.log('Connected to database!')
}).catch((e) => {
  console.log('Connection Failed!!!', (e))
});

app.listen(PORT, () => {
  console.log(`App running ===> visit at port ${PORT}!`);
});
