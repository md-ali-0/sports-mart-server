import { Router } from 'express';

const router = Router();

const moduleRoutes = [
    // { path: '/auth', route: AuthRoute },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
