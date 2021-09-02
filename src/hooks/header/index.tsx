import { FC } from 'react'
import { useCallback } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

import { HeaderContextData } from './props'

const initialValue = {} as HeaderContextData

const HeaderContext = createContext(initialValue)

export const HeaderProvider: FC = props => {
  const { children } = props

  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => {
    setOpen(prev => !prev)
  }, [])

  return (
    <HeaderContext.Provider value={{ open, toggle }}>
      {children}
    </HeaderContext.Provider>
  )
}

export function useHeader(): HeaderContextData {
  const context = useContext(HeaderContext)

  if (!context || context === initialValue) {
    throw new Error('useHeader must be used within a HeaderProvider')
  }
  return context
}
