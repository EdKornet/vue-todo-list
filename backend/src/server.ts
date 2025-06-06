import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRoutes from "./routes/todoRoutes";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", todoRoutes);

app.get('/', (req, res) => {
    res.send('Сервер работает! 🚀');
});
mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => console.log("MongoDB подключена"))
    .catch((err) => console.log("Ошибка подключения:", err));

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
