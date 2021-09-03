export interface TodosProps {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface TodosListContextData {
  /**
   * Method to fetch todos
   */
  getTodosList(): Promise<void>

  /**
   * Variable containing the todos listing
   */
  todos: TodosProps[]
}
