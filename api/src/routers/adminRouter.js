import express from "express";
import { updatePasswordValidation } from "../middlewares/validationMiddleware.js";
const router = express.Router();

// Get the admin information
router.get("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "todo get method",
    });
  } catch (error) {
    next(error);
  }
});

// Update Admin profile Information
router.put("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "todo get method",
    });
  } catch (error) {
    next(error);
  }
});

// Update admin password as a logged in user
router.patch("/", updatePasswordValidation, (req, res, next) => {
  console.log(req.body);
  try {
    res.json({
      status: "success",
      message: "doing now",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
