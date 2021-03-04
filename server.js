// Required Consts!
const express = require("express");
// const path = require("path");
const app = express();
const mongoose = require("mongoose");

//Port 5001 cause I'm crazy!
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Optimize for Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API Routes start with API and live at apiRoutes.js
app.use("/api", require("./routes/apiRoutes"))

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Let the user know the server is running, and which port.  Yeay!
app.listen(PORT, () => {
  console.log(`listening at http://localhost${PORT}`);
});
