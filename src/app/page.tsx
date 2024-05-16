import { Header } from '@/components/header'
import { getCurrentUser } from '@/lib/user'
import { UserProvider } from '@/provider/UserProvider'

export default async function Home() {
  const userData = await getCurrentUser()
  return (
    <UserProvider user={userData}>
      <main className="min-h-screen">
        <Header />
      </main>
    </UserProvider>
  )
}
