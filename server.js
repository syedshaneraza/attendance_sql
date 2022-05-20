const express = require("express");
const cors = require("cors");

// const bodyParser = require("body-parser");
// const adminRoute = require("./routes/admin.routes");
// const { adminMiddleware } = require("./helpers/verifyToken");
// const db = require("./helpers/db");
// const admin = require("./models/admin.model");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

// db.sequelize.sync({ force: true }).then(() => {
  //   console.log("Drop and re-sync db.");
  // });
  
  app.use(cors(corsOptions));
  app.use(express.json());
  // app.use(express.static("public"));
  app.use(express.urlencoded({ extended: true }));
  
  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
  
  require("./routes/routes.js")(app);
// app.use("/api/admin", adminMiddleware , adminRoute);
// var externalRoutes = require('./routes/tutorial.routes');
// app.use('/externalRoutes', externalRoutes);

// // DB Connection
// db.connect();
// admin.findAll().then(admins => {console.log(admins);});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
