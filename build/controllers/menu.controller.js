"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  fetchMenu: function fetchMenu(req, res) {
    var Menu = _menu.default.fetchMenu();

    return res.json({
      status: 'Success',
      data: Menu
    }).status(200);
  },
  addMenu: function addMenu(req, res) {
    var Menu = req.body;

    var createdMenu = _menu.default.addMenu(Menu);

    return res.json({
      status: 'Success',
      data: createdMenu
    }).status(201);
  }
};
var _default = MenuController;
exports.default = _default;
//# sourceMappingURL=menu.controller.js.map