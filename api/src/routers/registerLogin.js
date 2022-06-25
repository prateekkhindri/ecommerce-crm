import express, { Router } from "express";
import { hashPassword } from "../helpers/bcryptHelper.js";
import { adminRegistrationValidation } from "../middlewares/validationMiddleware.js";
import { createNewAdmin } from "../models/adminUser/AdminUserModel.js";
const route = express.Router();
import { v4 as uuidv4 } from "uuid";

// route.all("/", (req, res, next) => {
//   console.log(
//     "All the request of the api will go through this line of code, do some validation check here if needed before hitting the right method"
//   );
//   next();
// });

route.post("/", adminRegistrationValidation, async (req, res, next) => {
  try {
    //   After receiving the data from the server
    // 1. Encrypt the password
    //   console.time("hashing");
    req.body.password = hashPassword(req.body.password);
    //   console.log(hashedPass);

    const verificationCode = uuidv4();
    req.body.verificationCode = verificationCode;

    // 2. Call model to run the save query
    const result = await createNewAdmin(req.body);
    // console.log(result);

    // 3. Unique URL endpoint and send it to the client

    if (result?._id) {
      console.log(result);

      return res.json({
        status: "success",
        message:
          "We have sent you an email, please check your email and follow the instructions to activate your account",
      });
    }

    res.json({
      status: "success",
      message: "Unable to create a user at this moment, please try again later",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message =
        "There is already a registered user with this email, please login with this email or use a different email";
    }
    next(error);
  }
  //   console.log(req.body);
});

export default route;
