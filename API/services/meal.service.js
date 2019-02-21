import dummyData from '../utils/dummyData';
import Meal from '../models/meal.model';

const MealService = {
  fetchAllMeals() {
    const foundMeals = dummyData.Meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.price = meal.price;

      return foundMeals;
    });
  },

  getSingleMeal(id) {
    const foundMeal = dummyData.Meals.find(meal => meal.id === id);
    return foundMeal || {};
  },

  addMeal(meal) {
    const mealLength = dummyData.Meals.length;
    const lastId = dummyData.Meals[mealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;
    dummyData.Meals.push(meal);
    return meal;
  },

  updateMeal(id, mealUpdate) {
    const mealIndex = dummyData.Meals.findIndex(meal => meal.id === id);
    const meal = dummyData.meals[mealIndex];
    meal.name = mealUpdate.name;
    meal.price = mealUpdate.price;
    return meal;
  },

  deleteMeal(id) {
    dummyData.Meals = dummyData.Meals.filter(meal => meal.id !== id);
  },
};

export default MealService;
