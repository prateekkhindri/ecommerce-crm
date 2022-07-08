import Joi from "Joi";

export const adminRegistrationValidation = (req, res, next) => {
  console.log(req.body);
  // Check if the data is clean, if not then response from here with an error message, otherwise let express to continue executing the code to the next middleware by calling next()

  const schema = Joi.object({
    fName: Joi.string().min(3).max(50).required(),
    lName: Joi.string().min(3).max(50).required(),
    dob: Joi.date().allow(null, ""),
    phone: Joi.string().min(3).max(50).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).max(50).required(),
    password: Joi.string().min(6).max(50).required(),
    address: Joi.string().allow("").max(50),
  });

  const { error } = schema.validate(req.body);

  //   console.log(error);

  if (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }

  next();
};

export const loginValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).max(50).required(),
    password: Joi.string().min(6).max(50).required(),
  });

  const { error } = schema.validate(req.body);

  //   console.log(error);

  if (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }

  next();
};

export const newCategoryValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    status: Joi.string().required(),
    name: Joi.string().min(6).max(50).required(),
    parentCatId: Joi.string().allow(null, ""),
  });

  const { error } = schema.validate(req.body);

  //   console.log(error);

  if (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }

  next();
};

export const updateCategoryValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    _id: Joi.string().max(50).required(),
    status: Joi.string().required(),
    name: Joi.string().min(6).max(50).required(),
    parentCatId: Joi.string().allow(null, ""),
  });

  const { error } = schema.validate(req.body);

  //   console.log(error);

  if (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }

  next();
};
