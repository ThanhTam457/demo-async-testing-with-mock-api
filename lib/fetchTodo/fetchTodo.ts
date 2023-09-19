import type { Todo } from '../../types/todo';

export default async function fetchTodo() {
    try{
        const res = await fetch('/todos');
        const todos: Todo[] = await res.json(); 
        return todos;
    } catch(err) {
        console.log(err);
        return [];
    }
}