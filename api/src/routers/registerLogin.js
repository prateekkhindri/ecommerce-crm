import express, { Router } from "express";
import { adminRegistrationValidation } from "../middlewares/validationMiddleware.js";
const route = express.Router();

// route.all("/", (req, res, next) => {
//   console.log(
//     "All the request of the api will go through this line of code, do some validation check here if needed before hitting the right method"
//   );
//   next();
// });

route.post("/", adminRegistrationValidation, (req, res) => {
  console.log(req.body);

  //   After receiving the data from the server
  // 1. Encrypt the password
  // 2. Call model to run the save query
  // 3. Unique URL endpoint and send it to the client

  res.json({
    message: "todo",
  });
});

export default route;
