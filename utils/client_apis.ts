const API = 'http://localhost:5000';

export const TodosAPI ={
    get: `${API}/api/todos/`,
    post: `${API}/api/todos/`,
    edit: (id: string | number) => `${API}/api/todos/${id}/`,
    delete: (id: string | number) => `${API}/api/todos/${id}/`
}