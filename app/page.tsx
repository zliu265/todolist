'use client'

import AddTodo from "@/components/AddTodo";
import TodoFilter from "@/components/TodoFilter";
import TodoItem from "@/components/TodoItem";
import TodoList from "@/components/TodoList";
import { useState } from "react";
import { Todo } from "@/app/types";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<string>('all')

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleCompleted = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const getFilteredTodos = () => {
    if (filter === 'all') {
      return todos
    } else if (filter === 'completed') {
      return todos.filter(todo => todo.completed)
    } else {
      return todos.filter(todo => !todo.completed)
    }
  }

  return (
    <div>
      <h1>ToDoList</h1>
      <AddTodo addTodo={addTodo} ></AddTodo>
      <TodoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleCompleted} ></TodoList>
      <TodoFilter filter={filter} setFilter={setFilter} />
    </div>
  );
}
