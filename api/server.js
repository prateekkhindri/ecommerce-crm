import "dotenv/config";
import express from "express";
const app = express();
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const PORT = process.env.PORT || 8000;

// Use middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

// Connect to the database
import { mongoConnect } from "./src/config/dbConfig.js";
mongoConnect();

// API's
import registerLoginRouter from "./src/routers/registerLogin.js";
import categoryRouter from "./src/routers/categoryRouter.js";
import paymentMethodRouter from "./src/routers/paymentMethodRouter.js";

app.use("/api/v1/register-login", registerLoginRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/payment-method", paymentMethodRouter);

app.get("/", (req, res) => {
  res.json({
    message: "You have reached the e-commerce API",
  });
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.status || 400;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
