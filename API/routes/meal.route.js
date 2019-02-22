import { Router } from 'express';

// controller
import MealController from '../controllers/meal.controller';

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.get('/:id', MealController.getMeal);
router.post('/', MealController.addMeal);
router.put('/:id', MealController.updateMeal);
router.delete('/:id', MealController.deleteMeal);


// router.get('/');

export default router;
