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
export const updatePaymentMethodByID = ({ _id, ...update }) => {
  return PaymentMethodSchema.findByIdAndUpdate(_id, update, { new: true });
};

// Delete
export const deletePaymentMethodById = (_id) => {
  return PaymentMethodSchema.findByIdAndDelete(_id);
};
