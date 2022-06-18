import "dotenv/config";
import express from "express";
const app = express();
import helmet from "helmet";
import morgan from "morgan";

const PORT = process.env.PORT || 8000;

// Use middlewares
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "You have reached the e-commerce API",
  });
});

app.use((error, req, res) => {
  console.log(error.message);
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
