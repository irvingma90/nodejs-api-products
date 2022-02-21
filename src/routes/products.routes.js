import {Router} from 'express';
import * as productCtrl from '../controllers/product.controller';
import { authJwt } from '../middlewares';


const router = Router();

router.get('/',productCtrl.getProduct)
router.get('/:productId', productCtrl.getProductById)
router.post('/',[authJwt.verifyToken, authJwt.isModerator],productCtrl.createProduct)
router.put('/:productId',[authJwt.verifyToken, authJwt.isAdmin],productCtrl.updateProduct)
router.delete('/:productId',[authJwt.verifyToken, authJwt.isAdmin],productCtrl.deleteProduct)

export default router;
