"use client"

import { useState } from "react"
import { ListTodo, Plus, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface Todo {
  id: number
  text: string
  completed: boolean
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React hooks", completed: true },
    { id: 2, text: "Build a bento grid layout", completed: false },
    { id: 3, text: "Deploy to Vercel", completed: false },
  ])
  const [input, setInput] = useState("")

  const addTodo = () => {
    if (input.trim() === "") return
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: input.trim(), completed: false },
    ])
    setInput("")
  }

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <section className="flex flex-col gap-6 py-12">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon/10">
          <ListTodo className="h-5 w-5 text-neon" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Mini Tool: To-Do List</h2>
          <p className="text-sm text-muted-foreground">
            Practice React state management
          </p>
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="Add a new task..."
            className="bg-secondary border-border text-card-foreground placeholder:text-muted-foreground"
          />
          <Button onClick={addTodo} size="icon" className="shrink-0 bg-neon text-background hover:bg-neon/80">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add task</span>
          </Button>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          {todos.length === 0 && (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No tasks yet. Add one above!
            </p>
          )}
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="group/todo flex items-center gap-3 rounded-xl border border-border bg-secondary/50 px-4 py-3 transition-colors hover:bg-secondary"
            >
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
                className="border-muted-foreground data-[state=checked]:border-neon data-[state=checked]:bg-neon data-[state=checked]:text-background"
              />
              <span
                className={`flex-1 text-sm ${
                  todo.completed
                    ? "text-muted-foreground line-through"
                    : "text-card-foreground"
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover/todo:opacity-100"
                aria-label={`Remove ${todo.text}`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        {todos.length > 0 && (
          <div className="mt-4 flex justify-between border-t border-border pt-4 text-xs text-muted-foreground">
            <span>
              {todos.filter((t) => t.completed).length} of {todos.length}{" "}
              completed
            </span>
            <span className="font-mono text-neon">
              {Math.round(
                (todos.filter((t) => t.completed).length / todos.length) * 100
              )}
              %
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
