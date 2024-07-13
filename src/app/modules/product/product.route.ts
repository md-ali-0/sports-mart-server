import { Router } from 'express';
// import { upload } from '../../utils/upload';
import { ProductController } from './product.controller';

const router = Router();

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getSingleProduct);
router.post(
    '/',
    // upload.fields([{ name: 'image', maxCount: 1 }]),
    ProductController.createProduct,
);
router.put(
    '/:id',
    // upload.fields([{ name: 'image', maxCount: 1 }]),
    ProductController.updateProduct,
);
router.delete('/:id', ProductController.deleteProduct);

export const ProductRoute = router;
