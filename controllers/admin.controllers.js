const Admin = require("../models/admin.model");
const adminServices = require("../services/admin.ser");
const { adminForm } = require("../schema/admin.schema");
const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    console.log("In Login");
    const validation = adminForm.validate(req.body);
    if (validation.error) {
      return res.status(400).json({
        message: validation.error.details[0].message,
      });
    }
    const { admin, password } = req.body;
    try {
      const user = await adminServices.adminFindByName(admin);
      if (!user)
        return res.status(400).json({
          success: false,
          message: "admin does not exists",
        });
      const validPass = await bcrypt.compare(password, user.password);
      if (!validPass)
        return res.status(400).json({
          success: false,
          message: "Invalid password",
        });
      const token = jwt.sign(
        {
          _id: user._id,
          role : "admin"
        },
        process.env.JWT_SECRET_KEY , { expiresIn: '24h' }
      );
      res.cookie("t", token, {
        expire: new Date() + 9999,
      });
      return res.json({
        success: true,
        token: token,
        role: "admin",
        message: "Successfull login admin",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  },
};
