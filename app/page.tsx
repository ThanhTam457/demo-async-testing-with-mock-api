'use client'
import TodoList from "./components/TodoList/TodoList"
import AddTodo from "./components/AddTodo/AddTodo"
import fetchTodo from "@/lib/fetchTodo/fetchTodo"
import { useEffect, useState } from "react"
import type { Todo } from "../types/todo"

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    async function getTodos() {
      const todos = await fetchTodo()
      if(todos?.length) setTodos(todos)
    }
    getTodos()
  }, [])

  return (
    <>
      <AddTodo setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}
