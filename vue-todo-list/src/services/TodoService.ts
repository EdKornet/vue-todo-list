export interface Todo {
    _id: string;
    title: string;
    completed: boolean;
}

class TodoService {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    // Функция для обработки ответа
    private async handleResponse(response: Response): Promise<any> {
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${await response.text()}`);
        }
        return response.json();
    }

    // Получение списка задач
    public async getTodos(): Promise<Todo[]> {
        const response = await fetch(this.apiUrl);
        return this.handleResponse(response);
    }

    // Добавление новой задачи
    public async addTodo(title: string): Promise<Todo> {
        const response = await fetch(this.apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title }),
        });
        return this.handleResponse(response);
    }

    // Обновление статуса задачи
    public async updateTodo(id: string, completed: boolean): Promise<Todo> {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed }),
        });
        return this.handleResponse(response);
    }

    // Удаление задачи
    public async deleteTodo(id: string): Promise<void> {
        const response = await fetch(`${this.apiUrl}/${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Ошибка при удалении");
    }
}

// Использование класса
const todoService = new TodoService("http://localhost:5000/api/todos");

// Пример использования методов
const getTodosExample = async () => {
    const todos = await todoService.getTodos();
    console.log(todos);
};

const addTodoExample = async () => {
    const newTodo = await todoService.addTodo("New Task");
    console.log(newTodo);
};
