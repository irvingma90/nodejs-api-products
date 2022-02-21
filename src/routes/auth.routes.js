import {Router} from 'express';
import * as authCtrl from '../controllers/auth.controller';
import {verifySignup} from '../middlewares'

const router = Router();

router.post('/signup',[verifySignup.checkDuplicateUserOrEmail, verifySignup.checkRolesExisted],authCtrl.signup);
router.post('/signin', authCtrl.sigin);

export default router;