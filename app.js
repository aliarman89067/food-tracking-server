import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cuisinesRouter from "./routes/cuisines.route.js";
import foodsRouter from "./routes/foods.route.js";
import Cuisine from "./models/cuisine.model.js";
import Food from "./models/food.model.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api/v1/cuisines", cuisinesRouter);
app.use("/api/v1/foods", foodsRouter);

app.use("/", (req, res) => {
  res.send("Hello World");
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log(`Database is connected`);
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
