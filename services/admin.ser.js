const Admin = require("../models/admin.model");

const registerAdmin = (admin) => {
  return admin.save();
};

const getAdminById = (admin) => {
  return Admin.findOne({ _id: admin });
};
const adminFindByName = (admin) => {
  return Admin.findOne({ admin });
};
const getAllAdmins = () => {
  return Admin.find({});
};
const adminServices = {
  registerAdmin,
  adminFindByName,
  getAllAdmins,
  getAdminById,
};
module.exports = adminServices; 
