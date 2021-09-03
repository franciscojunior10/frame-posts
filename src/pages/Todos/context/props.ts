export interface TodosProps {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface TodosListContextData {
  getTodosList(): Promise<void>

  todos: TodosProps[]
}
