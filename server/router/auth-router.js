const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller")

// router.get("/", (req, res) => {
//     res.status(200).send("Successfully connected with Router");
// });

router.route("/").get(authController.home);
router.route("/registration").post(authController.registration);

module.exports = router;