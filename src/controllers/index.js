const userControllers = require("./usersController");
const AuthController = require("./AuthController");
const encryptController = require("./encryptController");
// const mongoController = require("./mongoController");
module.exports = {
  userControllers,
  AuthController,
  encryptController,
  ProductController: require("./productController"),
  // mongoController,
};
