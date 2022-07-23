import express from "express";
import { hashPassword, comparePassword } from "../helpers/bcryptHelper.js";
import { profileUpdateNotification } from "../helpers/emailHelper.js";
import {
  updateAdminProfileValidation,
  updatePasswordValidation,
} from "../middlewares/validationMiddleware.js";
import {
  getOneAdmin,
  updateAdmin,
} from "../models/adminUser/AdminUserModel.js";
const router = express.Router();

// Get the admin information (TO DO)
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
router.put("/", updateAdminProfileValidation, async (req, res, next) => {
  try {
    const { currentPassword, email, ...rest } = req.body;

    // Check if the user exists for the given email
    const user = await getOneAdmin({ email });

    if (user._id) {
      // If so, check if the password stored in the db matches the password sent
      const isMatched = comparePassword(currentPassword, user.password);

      if (isMatched) {
        // Update the password in the db
        const filter = { _id: user._id };

        const updatedAdmin = await updateAdmin(filter, rest);

        if (updatedAdmin?._id) {
          res.json({
            status: "success",
            message: "New profile has been updated",
          });
        }
        // Finally, send the email notification
        profileUpdateNotification(user);
        return;
      }
    }
    res.json({
      status: "error",
      message: "Unable to update profile, please try again later",
    });
  } catch (error) {
    next(error);
  }
});

// Update admin password as a logged in user
router.patch("/", updatePasswordValidation, async (req, res, next) => {
  try {
    const { currentPassword, password, email } = req.body;
    // Check if the user exists for the given email
    const user = await getOneAdmin({ email });

    if (user._id) {
      // If so, check if the password stored in the db matches the password sent
      const isMatched = comparePassword(currentPassword, user.password);

      if (isMatched) {
        // Encrypt the new password
        const hashedPassword = hashPassword(password);

        // Update the password in the db
        const filter = { _id: user._id };
        const obj = {
          password: hashedPassword,
        };
        const updatedAdmin = await updateAdmin(filter, obj);

        if (updatedAdmin?._id) {
          res.json({
            status: "success",
            message: "New password has been updated",
          });
        }
        // Finally, send the email notification
        profileUpdateNotification(user);
        return;
      }
    }

    res.json({
      status: "error",
      message: "Invalid current password",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
