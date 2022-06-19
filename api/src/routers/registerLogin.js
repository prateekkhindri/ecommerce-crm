import express, { Router } from "express";
const route = express.Router();

// route.all("/", (req, res, next) => {
//   console.log(
//     "All the request of the api will go through this line of code, do some validation check here if needed before hitting the right method"
//   );
//   next();
// });

route.post("/", (req, res) => {
  console.log(req.body);

  res.json({
    message: "todo",
  });
});

export default route;
