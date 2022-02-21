import { Router } from "express";
import * as userCtrl from '../controllers/user.controller'
import { authJwt, verifySignup } from "../middlewares";


const router = Router()

router.post('/',[authJwt.verifyToken,authJwt.isAdmin,verifySignup.checkRolesExisted],userCtrl.createUser);
router.get('/', [authJwt.verifyToken, authJwt.isAdmin],userCtrl.getUsers);
router.get('/:userId',[authJwt.verifyToken, authJwt.isAdmin],userCtrl.getUserById);
router.put('/:userId',userCtrl.updateUser);
router.delete('/:userId',[authJwt.verifyToken, authJwt.isAdmin],userCtrl.deleteUser);

export default router;