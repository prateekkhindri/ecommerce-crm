import express from "express";
import { newCategoryValidation } from "../middlewares/validationMiddleware.js";
import { createNewCategory } from "../models/categoryUser/CategoryModel.js";

const router = express.Router();

import slugify from "slugify";

// Add Category
router.post("/", newCategoryValidation, async (req, res, next) => {
  try {
    // console.log(req.body);

    req.body.slug = slugify(req.body.name, {
      lower: true,
      trim: true,
    });

    const result = await createNewCategory(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "New category has been added",
          result,
        })
      : res.json({
          status: "error",
          message: "Unable to add a new category",
        });
  } catch (error) {
    error.status = 500;

    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message =
        "This category already exists, please use a different name";
    }

    next(error);
  }
});

export default router;
