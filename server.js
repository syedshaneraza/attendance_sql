const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin.routes");
const { adminMiddleware } = require("./helpers/verifyToken");
const db = require("./helpers/db");
const admin = require("./models/admin.model");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.use("/api/admin", adminMiddleware , adminRoute);

// DB Connection
db.connect();
admin.findAll().then(admins => {console.log(admins);});

// set port, listen for requests
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});