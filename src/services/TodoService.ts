import type { Task } from '@types/task.d.ts';
import {TodosAPI} from "/utils/client_apis";

export class TodoService {

    // Функция для обработки ответа
    private async handleResponse(response: Response): Promise<any> {
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${await response.text()}`);
        }
        return response.json();
    }

    // Получение списка задач
    public async getTodos(): Promise<Task[]> {
        const response = await fetch(TodosAPI.get);
        return this.handleResponse(response);
    }

    // Добавление новой задачи
    public async addTodo(taskData: Omit<Task, 'id'>): Promise<Task> {
        console.log(taskData)
        const response = await fetch(TodosAPI.post, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(taskData),
        });
        return this.handleResponse(response);
    }

    // Обновление статуса задачи
    // public async updateTodo(id: string, completed: boolean): Promise<Task> {
    //     const response = await fetch(`${this.apiUrl}/${id}`, {
    //         method: "PUT",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ completed }),
    //     });
    //     return this.handleResponse(response);
    // }

    // Удаление задачи
    // public async deleteTodo(id: string): Promise<void> {
    //     const response = await fetch(`${this.apiUrl}/${id}`, { method: "DELETE" });
    //     if (!response.ok) throw new Error("Ошибка при удалении");
    // }
}

