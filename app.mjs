import express from "express";
const app = express();
import cors from "cors";
const router = express.Router();
import userRoutes from "./routes/userRoutes.js";

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

app.listen(3000, () => {
  console.log("server is listening ");
});
