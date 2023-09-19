import type { Todo } from '../../types/todo';

export default async function updateTodo(todo: Todo): Promise<Todo> {
    const res = await fetch(`/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            ...todo, completed: !todo.completed
        })
    })

    if(!res.ok) {
        throw new Error('Something went wrong');
    }
    return await res.json();
}