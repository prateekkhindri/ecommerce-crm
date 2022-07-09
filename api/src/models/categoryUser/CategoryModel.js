import CategorySchema from "./CategorySchema.js";

// Insert new category
export const createNewCategory = (obj) => {
  return CategorySchema(obj).save();
};

// Read categories
export const getCategories = () => {
  return CategorySchema.find();
};

// Read category by Id
export const getCategoryById = (_id) => {
  return CategorySchema.findById(_id);
};

// Update category by Id
export const updateCategoryById = ({ _id, ...obj }) => {
  return CategorySchema.findByIdAndUpdate(_id, obj, { new: true });
};

// Delete category by Id, ids must be an array
export const deleteCategoriesByIds = (ids) => {
  return CategorySchema.deleteMany({ _id: { $in: ids } });
};
