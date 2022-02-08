import {Router} from 'express';
import * as productCtrl from '../controllers/product.controller';


const router = Router();

router.get('/', productCtrl.getProduct)
router.get('/:productId', productCtrl.getProductById)
router.post('/', productCtrl.createProduct)
router.put('/:productId', productCtrl.updateProduct)
router.delete('/:productId', productCtrl.deleteProduct)

export default router;
