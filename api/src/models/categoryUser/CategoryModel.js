import CategorySchema from "./CategorySchema.js";

// Insert new category
export const createNewCategory = (obj) => {
  return CategorySchema(obj).save();
};
