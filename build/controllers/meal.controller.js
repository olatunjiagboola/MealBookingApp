"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../services/meal.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  fetchAllMeals: function fetchAllMeals(req, res) {
    var allMeals = _meal.default.fetchAllMeals();

    return res.json({
      status: 'Success',
      data: allMeals
    }).status(200);
  },
  addMeal: function addMeal(req, res) {
    var newMeal = req.body;

    var createdMeal = _meal.default.addMeal(newMeal);

    return res.json({
      status: 'Success',
      data: createdMeal
    }).status(201);
  },
  getMeal: function getMeal(req, res) {
    var id = req.params.id;

    var foundMeal = _meal.default.getSingleMeal(parseInt(id, 10));

    return res.json({
      status: 'Success',
      data: foundMeal
    }).status(200);
  },
  updateMeal: function updateMeal(req, res) {
    var id = req.params.id;
    var mealUpdate = req.body;

    var theMeal = _meal.default.updateMeal(parseInt(id, 10), mealUpdate);

    return res.json({
      status: 'Success',
      message: 'Meal Updated Successfully',
      data: theMeal
    }).status(201);
  },
  deleteMeal: function deleteMeal(req, res) {
    var id = req.params.id;

    var meals = _meal.default.deleteMeal(parseInt(id, 10));

    return res.json({
      status: 'success',
      message: 'meal deleted successfully',
      data: meals
    });
  }
};
var _default = MealController;
exports.default = _default;
//# sourceMappingURL=meal.controller.js.map