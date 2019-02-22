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
    const addedMeal = { id: newId, ...meal };
    dummyData.Meals.push(addedMeal);
    return addedMeal;
  },

  updateMeal(id, mealUpdate) {
    const mealIndex = dummyData.Meals.findIndex(meal => meal.id === id);
    const oldMeal = { ...dummyData.Meals[mealIndex] };
    const updatedMeal = {
      id,
      name: mealUpdate.name ? mealUpdate.name : oldMeal.name,
      price: mealUpdate.price ? mealUpdate.price : oldMeal.price,
    };

    dummyData.Meals[mealIndex] = updatedMeal;
    return updatedMeal;
  },

  deleteMeal(id) {
    dummyData.Meals = dummyData.Meals.filter(meal => meal.id !== id);
  },
};

export default MealService;
