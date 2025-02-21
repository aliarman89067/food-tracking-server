import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cuisinesRouter from "./routes/cuisines.route.js";
import foodsRouter from "./routes/foods.route.js";
import Cuisine from "./models/cuisine.model.js";
import Food from "./models/food.model.js";

const app = express();

app.use(express.json());
app.use("/api/v1/cuisines", cuisinesRouter);
app.use("/api/v1/foods", foodsRouter);

app.get("/", async (req, res) => {
  try {
    const cuisinesData = await Cuisine.find();
    res.status(200).json({ success: true, data: cuisinesData });
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT, () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
