'use client'

import { createContext, ReactNode, useContext } from 'react'

type User = any

export const UserContext = createContext<User>(null)

export function useUser() {
  return useContext(UserContext)
}

export const UserProvider = ({
  children,
  user,
}: {
  children: ReactNode
  user: User | null
}) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
