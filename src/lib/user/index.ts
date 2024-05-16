import { auth } from '@clerk/nextjs/server'

export const getCurrentUser = async () => {
  const authData = auth()
  const { userId } = authData
  if (!userId) return null

  return {
    clerkUserId: authData.userId,
  }
}
