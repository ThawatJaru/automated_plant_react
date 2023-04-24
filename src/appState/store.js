import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    id:"",
    
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