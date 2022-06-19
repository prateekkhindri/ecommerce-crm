import Joi from "Joi";

export const adminRegistrationValidation = (req, res, next) => {
  console.log(req.body);
  // Check if the data is clean, if not then response from here with an error message, otherwise let express to continue executing the code to the next middleware by calling next()

  const schema = Joi.object({
    fName: Joi.string().min(3).max(50).required(),
    lName: Joi.string().min(3).max(50).required(),
    Dob: Joi.date(),
    email: Joi.string().email({ minDomainSegments: 2 }).max(50).required(),
    password: Joi.string().min(6).max(50).required(),
    address: Joi.string().allow(""),
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
