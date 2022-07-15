import express from "express";
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

router.post("/", (req, res, next) => {
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
