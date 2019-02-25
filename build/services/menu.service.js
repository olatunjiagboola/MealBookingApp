"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

var _menu = _interopRequireDefault(require("../models/menu.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MenuService = {
  fetchMenu: function fetchMenu() {
    return _dummyData.default.Menu.map(function (menu) {
      var newMenu = new _menu.default();
      newMenu.id = menu.id;
      newMenu.day = menu.day;
      newMenu.meals = menu.meals;
      newMenu.vendor_id = menu.vendor_id;
      newMenu.category = menu.category;
      return newMenu;
    });
  },
  addMenu: function addMenu(menu) {
    var menuLength = _dummyData.default.Menu.length;
    var lastId = _dummyData.default.Menu[menuLength - 1].id;
    var newId = lastId + 1;

    var newMenu = _objectSpread({
      id: newId
    }, menu);

    _dummyData.default.Menu.push(newMenu);

    return newMenu;
  }
};
var _default = MenuService;
exports.default = _default;
//# sourceMappingURL=menu.service.js.map