const express = require("express");
const router = express.Router();
const User_ctrl = require("../controllers/users");

router.post("/signup",User_ctrl.signup)
router.get('/confirmation/:tokenV',User_ctrl.confirmation_email);
router.post("/login",User_ctrl.login);
router.get('/forgotPass/:user_id',User_ctrl.forgot_password)
router.get('/Reset_link/:Token',User_ctrl.reset_password);
router.delete("/:userId",User_ctrl.delete);

module.exports = router;