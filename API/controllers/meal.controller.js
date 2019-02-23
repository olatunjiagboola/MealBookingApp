import MealService from '../services/meal.service';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();
    return res.json({
      status: 'Success',
      data: allMeals,
    }).status(200);
  },

  addMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealService.addMeal(newMeal);
    return res.json({
      status: 'Success',
      data: createdMeal,
    }).status(201);
  },

  getMeal(req, res) {
    const { id } = req.params;
    const foundMeal = MealService.getSingleMeal(parseInt(id, 10));
    return res.json({
      status: 'Success',
      data: foundMeal,
    }).status(200);
  },

  updateMeal(req, res) {
    const { id } = req.params;
    const mealUpdate = req.body;
    const theMeal = MealService.updateMeal(parseInt(id, 10), mealUpdate);
    return res.json({
      status: 'Success',
      message: 'Meal Updated Successfully',
      data: theMeal,
    }).status(201);
  },

  deleteMeal(req, res) {
    const { id } = req.params;
    const meals = MealService.deleteMeal(parseInt(id, 10));
    return res.json({
      status: 'success',
      message: 'meal deleted successfully',
      data: meals,
    });
  },
};

export default MealController;
