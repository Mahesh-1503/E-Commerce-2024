// routes/authRoute.js
import { registerController, loginController, testController } from "../controllers/authController.js";

const router = require('express').Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/test', testController);

export default router;
