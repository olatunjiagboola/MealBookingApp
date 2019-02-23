import dummyData from '../utils/dummyData';
import Meal from '../models/meal.model';

const MealService = {
  fetchAllMeals() {
    const foundMeals = dummyData.Meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.Price = meal.Price;

      return newMeal;
    });
    return foundMeals;
  },

  getSingleMeal(id) {
    const foundMeal = dummyData.Meals.find(meal => meal.id === id);
    return foundMeal || {};
  },

  addMeal(meal) {
    const mealLength = dummyData.Meals.length;
    const lastId = dummyData.Meals[mealLength - 1].id;
    const newId = lastId + 1;
    const addedMeal = meal;
    addedMeal.id = newId;
    dummyData.Meals.push(addedMeal);
    return addedMeal;
  },

  updateMeal(id, mealUpdate) {
    const mealIndex = dummyData.Meals.findIndex(meal => meal.id === id);
    const oldMeal = { ...dummyData.Meals[mealIndex] };
    const updatedMeal = {
      id,
      name: mealUpdate.name ? mealUpdate.name : oldMeal.name,
      Price: mealUpdate.Price ? mealUpdate.Price : oldMeal.Price,
    };

    dummyData.Meals[mealIndex] = updatedMeal;
    return updatedMeal;
  },

  deleteMeal(id) {
    dummyData.Meals = dummyData.Meals.filter(meal => meal.id !== id);
    return dummyData.Meals;
  },
};

export default MealService;
