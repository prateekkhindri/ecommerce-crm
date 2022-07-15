import PaymentMethodSchema from "./PaymentMethodSchema.js";

// CRUD

// Queries

export const createPaymentMethod = (obj) => {
  return PaymentMethodSchema(obj).save();
};

export const getPaymentMethods = (obj) => {
  return PaymentMethodSchema.find();
};

// Filter must be an object
export const getSinglePaymentMethod = (filter) => {
  return PaymentMethodSchema.findOne(filter);
};

// Both filter and update must be an object
export const updatePaymentMethod = (filter, update) => {
  return PaymentMethodSchema.findOne(filter, update, { new: true });
};

// Delete
export const deletePaymentMethod = (filter) => {
  return PaymentMethodSchema.findOneAndDelete(filter);
};
