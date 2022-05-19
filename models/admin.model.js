const bcrypt = require("bcryptjs");
const Sequelize = require('sequelize');
//const Token = require("./token.model");
const db = require('../helpers/db');

const Admin = db.define('admin', {
    admin:{
      type: Sequelize.STRING,
      allowNull: false
    },
    password:{
      type: Sequelize.STRING,
      allowNull:false
    } 
}); 
/*
Admin.methods.isValidPassword = async function (newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.local.password);
  } catch (error) {
    throw new Error(error);
  }
};
*/
module.exports = Admin;
/*
class Admin extends Model {}

Admin.init({
    admin:{
      type: DataTypes.STRING,
      allowNull: false
    },
    password:{
      type: DataTypes.STRING,
      allowNull:false
    },
  },
    {
      connection,
      modelName: 'Admin'
    }
);
*/


/*
const adminSchema = connection.define('admin', {
  admin: {
    type: sequelize.STRING,
  },
  password: {
    type: sequelize.STRING
  },
}, {
  timestamps: false
});

var adminSchema = sequelize.model('' {
  admin: {
    type: sequelize.STRING,
  },
  password: {
    type: sequelize.STRING
  }
});
*/



//module.exports = Sequelize.define("Admin", Admin );

/*
module.exports = mongoose.model("Admin", adminSchema); 

module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};
*/