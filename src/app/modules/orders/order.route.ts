import { Router } from 'express';
import { OrderController } from './order.controller';

const router = Router();

router.get('/', OrderController.getAllOrders);
router.get('/:id', OrderController.getSingleOrder);
router.post('/', OrderController.createOrder);
router.put('/:id', OrderController.updateOrder);
router.delete('/:id', OrderController.deleteOrder);

export const OrderRoute = router;
