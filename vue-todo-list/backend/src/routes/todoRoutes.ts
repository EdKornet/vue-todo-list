import express, { Request, Response } from "express";
import Todo, { ITodo } from "../models/Todo";

const router = express.Router();

router.get("/todos", async (req: Request, res: Response) => {
    try {
        const todos: ITodo[] = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: "Ошибка сервера" });
    }
});

router.post("/todos", async (req: Request, res: Response) => {
    try {
        const { title } = req.body;
        const newTodo = new Todo({ title });
        await newTodo.save();
        res.json(newTodo);
    } catch (error) {
        res.status(500).json({ message: "Ошибка при создании задачи" });
    }
});

router.put("/todos/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: "Ошибка при обновлении" });
    }
});

router.delete("/todos/:id", async (req: Request, res: Response) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: "Задача удалена" });
    } catch (error) {
        res.status(500).json({ message: "Ошибка при удалении" });
    }
});

export default router;
