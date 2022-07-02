import AdminSchema from "./AdminUserSchema.js";

export const createNewAdmin = (obj) => {
  return AdminSchema(obj).save();
};

export const updateAdmin = (filter, obj) => {
  return AdminSchema.findOneAndUpdate(filter, obj, { new: true });
};

// Filter must be an object i.e {email: "a@a.com"}
export const getOneAdmin = (filter) => {
  return AdminSchema.findOne(filter);
};

// export const updateVerificationCodeByUserId = (_id, verificationCode) => {
//   return AdminSchema.findByIdAndUpdate(_id, {
//     verificationCode,
//   });
// };
