import express from "express";
import { router } from "./route.js";

const app = express();

app.use(express.json());

app.use("/api", router);

// global error handler
app.use((error, req, res, next) => {
  res.json({
    message: error.message,
    success: false,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
