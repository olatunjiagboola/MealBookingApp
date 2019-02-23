import { Router } from 'express';

// controller
import OrderController from '../controllers/order.controller';

const router = Router();

router.get('/', OrderController.fetchOrders);
router.post('/', OrderController.addOrder);
router.put('/:id', OrderController.updateOrder);


export default router;
