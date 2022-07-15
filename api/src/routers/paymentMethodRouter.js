import express from "express";
import { paymentMethodValidation } from "../middlewares/validationMiddleware.js";
import { createPaymentMethod } from "../models/paymentMethod/PaymentMethodModel.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "Todo get method",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.post("/", paymentMethodValidation, async (req, res, next) => {
  try {
    const result = await createPaymentMethod(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "The new payment method has been added",
        })
      : res.json({
          status: "error",
          message:
            "Error, unable to add the payment method, please try again later",
        });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.put("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "Todo put method",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.delete("/:_id", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "Todo delete method",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
