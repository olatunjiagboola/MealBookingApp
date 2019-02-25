"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

var _meal = _interopRequireDefault(require("../models/meal.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MealService = {
  fetchAllMeals: function fetchAllMeals() {
    var foundMeals = _dummyData.default.Meals.map(function (meal) {
      var newMeal = new _meal.default();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.Price = meal.Price;
      return newMeal;
    });

    return foundMeals;
  },
  getSingleMeal: function getSingleMeal(id) {
    var foundMeal = _dummyData.default.Meals.find(function (meal) {
      return meal.id === id;
    });

    return foundMeal || {};
  },
  addMeal: function addMeal(meal) {
    var mealLength = _dummyData.default.Meals.length;
    var lastId = _dummyData.default.Meals[mealLength - 1].id;
    var newId = lastId + 1;
    var addedMeal = meal;
    addedMeal.id = newId;

    _dummyData.default.Meals.push(addedMeal);

    return addedMeal;
  },
  updateMeal: function updateMeal(id, mealUpdate) {
    var mealIndex = _dummyData.default.Meals.findIndex(function (meal) {
      return meal.id === id;
    });

    var oldMeal = _objectSpread({}, _dummyData.default.Meals[mealIndex]);

    var updatedMeal = {
      id: id,
      name: mealUpdate.name ? mealUpdate.name : oldMeal.name,
      Price: mealUpdate.Price ? mealUpdate.Price : oldMeal.Price
    };
    _dummyData.default.Meals[mealIndex] = updatedMeal;
    return updatedMeal;
  },
  deleteMeal: function deleteMeal(id) {
    _dummyData.default.Meals = _dummyData.default.Meals.filter(function (meal) {
      return meal.id !== id;
    });
    return _dummyData.default.Meals;
  }
};
var _default = MealService;
exports.default = _default;
//# sourceMappingURL=meal.service.js.map