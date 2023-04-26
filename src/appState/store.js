import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    id:"00000000-0000-4000-8000-000000000000",
    
  })

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider