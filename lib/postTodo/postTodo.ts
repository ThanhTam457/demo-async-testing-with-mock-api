import type { Todo } from '../../types/todo';

export default async function postTodo(item: string): Promise<Todo> {
    const res = await fetch('/todos', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            userId: 1, title: item, completed: false
        })
    })

    if(!res.ok) {
        throw new Error('Something went wrong');
    }
    return await res.json();
}