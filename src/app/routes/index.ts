import { Router } from 'express';
import { OrderRoute } from '../modules/orders/order.route';
import { ProductRoute } from '../modules/product/product.route';

const router = Router();

const moduleRoutes = [
    { path: '/product', route: ProductRoute },
    { path: '/order', route: OrderRoute },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
