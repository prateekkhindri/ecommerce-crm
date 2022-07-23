import SessionSchema from "./sessionSchema.js";

// Create
export const insertSession = (obj) => {
  return SessionSchema(obj).save();
};

// Read, filter must be an object
export const getSession = (filter) => {
  return SessionSchema.findOne(filter);
};

// Delete, filter must be an object
export const deleteSession = (filter) => {
  return SessionSchema.findOneAndDelete(filter);
};
