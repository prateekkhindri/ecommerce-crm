import express from "express";
import {
  newCategoryValidation,
  updateCategoryValidation,
} from "../middlewares/validationMiddleware.js";
import {
  createNewCategory,
  deleteCategoriesByIds,
  getCategories,
  getCategoryById,
  updateCategoryById,
} from "../models/categoryUser/CategoryModel.js";

const router = express.Router();

import slugify from "slugify";

// Read Category
router.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const result = _id ? await getCategoryById(_id) : await getCategories();

    console.log(result);

    res.json({
      status: "success",
      message: "Here are the categories",
      result,
    });
  } catch (error) {
    next(error);
  }
});

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

// Update Category
router.put("/", updateCategoryValidation, async (req, res, next) => {
  try {
    console.log(req.body);

    // const { _id, ...rest } = req.body;
    const result = await updateCategoryById(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "The category has been updated",
        })
      : res.json({
          status: "success",
          message:
            "Error, unable to update the category, please try again ;later",
        });
  } catch (error) {
    next(error);
  }
});

// Delete Category
router.delete("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { ids } = req.body;

    // const { _id, ...rest } = req.body;
    const result = await deleteCategoriesByIds(ids);

    console.log(result);
    result?.deletedCount
      ? res.json({
          status: "success",
          message: "The category has been deleted",
        })
      : res.json({
          status: "error",
          message:
            "Error, unable to delete the category, please try again later",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
