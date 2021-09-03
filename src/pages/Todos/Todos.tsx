import { FC, useEffect } from 'react'

import { Layout } from 'components/Layout'
import { TabName } from 'components/TabName'
import { withContext } from 'utils/withContext'

import { TodosListProvider, useTodosList } from './context'
import { TodosProps } from './context/props'
import * as Styled from './styles'

const Todos: FC = withContext(() => {
  const { getTodosList, todos } = useTodosList()

  useEffect(() => {
    getTodosList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TabName tabName="todos">
      <Layout titlePage="Todos">
        <Styled.TodosContainer>
          {todos.map((todo: TodosProps) => (
            <div key={todo.id}>
              <h2>{todo.title}</h2>
              <h3>completo: {todo.completed ? 'Sim' : 'Não'}</h3>
              <div />
            </div>
          ))}
        </Styled.TodosContainer>
      </Layout>
    </TabName>
  )
}, TodosListProvider)

export { Todos }
