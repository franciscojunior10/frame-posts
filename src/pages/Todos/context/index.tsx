import { FC } from 'react'
import { useCallback } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

import { api } from 'services/api'

import { TodosListContextData, TodosProps } from './props'

const initialValue = {} as TodosListContextData

const TodosListContext = createContext(initialValue)

export const TodosListProvider: FC = props => {
  const { children } = props

  const [todos, setTodos] = useState<TodosProps[]>([])

  const getTodosList = useCallback(async () => {
    try {
      const response = await api.get<TodosProps[]>('/todos')

      setTodos(response.data)
    } catch (error) {}
  }, [])

  return (
    <TodosListContext.Provider value={{ getTodosList, todos }}>
      {children}
    </TodosListContext.Provider>
  )
}

export function useTodosList(): TodosListContextData {
  const context = useContext(TodosListContext)

  if (!context || context === initialValue) {
    throw new Error('useTodosList must be used within a TodosListProvider')
  }
  return context
}
