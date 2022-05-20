const express = require("express");
const router = express.Router();
const adminCtrl = require("../controllers/admin.controllers");

router.route("/api/admin/login").post(adminCtrl.login);
// router.route("/create").post(adminCtrl.create);
//router.route("/mark").post(adminCtrl.adminMarkAttendance);
//router.route("/attendance-update").post(adminCtrl.editAttendance);

//router.route("/delete-employee").delete(adminCtrl.employeeDelete);
//router.route("/update-employee-status").get(adminCtrl.employeeStatusUpdate);

//router.route("/attendance/delete").delete(adminCtrl.deleteAttendance);

module.exports = router;
