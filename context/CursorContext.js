import { createContext, useState } from 'react'

export const CursorContext = createContext()

export default function CursorProvider({ children }) {
  const [cursor, setCursor] = useState({
    showCustomCursor: true,
  })
  return (
    <CursorContext.Provider value={{ cursor, setCursor }}>
      {children}
    </CursorContext.Provider>
  )
}
