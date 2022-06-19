import express, { Router } from "express";
import { hashPassword } from "../helpers/bcryptHelper.js";
import { adminRegistrationValidation } from "../middlewares/validationMiddleware.js";
import { createNewAdmin } from "../models/adminUser/AdminUserModel.js";
const route = express.Router();

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

    // 2. Call model to run the save query
    const result = await createNewAdmin(req.body);
    console.log(result);

    // 3. Unique URL endpoint and send it to the client

    res.json({
      message: "todo",
    });
  } catch (error) {
    next(error);
  }
  //   console.log(req.body);
});

export default route;
