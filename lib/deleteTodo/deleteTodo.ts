import type { Todo } from '../../types/todo';

export default async function deleteTodo(todo: Todo): Promise<Partial<Todo>> {
    const res = await fetch(`/todos/${todo.id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            id: todo.id
        })
    })
    if(!res.ok) {
        throw new Error('Something went wrong');
    }
    return await res.json();
}