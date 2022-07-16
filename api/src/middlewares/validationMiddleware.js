import Joi from "Joi";
import {
  DOB,
  EMAIL,
  FNAME,
  joiValidator,
  LNAME,
  LONGSTR,
  PASSWORD,
  PHONE,
  SHORTSTR,
  STATUS,
} from "./validationConstant.js";

export const adminRegistrationValidation = (req, res, next) => {
  console.log(req.body);
  // Check if the data is clean, if not then response from here with an error message, otherwise let express to continue executing the code to the next middleware by calling next()

  const schema = Joi.object({
    fName: FNAME,
    lName: LNAME,
    dob: DOB,
    phone: PHONE,
    email: EMAIL,
    password: PASSWORD,
    address: ADDRESS,
  });

  joiValidator(schema, req, res, next);
};

export const loginValidation = (req, res, next) => {
  // console.log(req.body);

  const schema = Joi.object({
    EMAIL: Joi.string().email({ minDomainSegments: 2 }).max(50).required(),
    PASSWORD: Joi.string().min(6).max(50).required(),
  });

  joiValidator(schema, req, res, next);
};

export const newCategoryValidation = (req, res, next) => {
  // console.log(req.body);

  const schema = Joi.object({
    status: STATUS,
    name: SHORTSTR.required(),
    parentCatId: SHORTSTR.allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};

export const updateCategoryValidation = (req, res, next) => {
  // console.log(req.body);
  req.body.parentCatId = req.body.parentCatId ? req.body.parentCatId : null;
  const schema = Joi.object({
    _id: SHORTSTR.required(),
    status: STATUS,
    name: SHORTSTR.required(),
    parentCatId: LONGSTR.allow(null),
  });

  joiValidator(schema, req, res, next);
};

export const paymentMethodValidation = (req, res, next) => {
  // console.log(req.body);
  // req.body.parentCatId = req.body.parentCatId ? req.body.parentCatId : null;
  const schema = Joi.object({
    status: STATUS.required(),
    name: SHORTSTR.required(),
    description: LONGSTR.allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};

export const updatePaymentMethod = (req, res, next) => {
  // console.log(req.body);
  // req.body.parentCatId = req.body.parentCatId ? req.body.parentCatId : null;
  const schema = Joi.object({
    _id: SHORTSTR.required(),
    status: STATUS.required(),
    name: SHORTSTR.required(),
    description: LONGSTR.allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};
