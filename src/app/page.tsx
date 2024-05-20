import { Header } from '@/components/header'
import { Upload } from '@/components/upload'
import { getCurrentUser } from '@/lib/user'
import { UserProvider } from '@/provider/UserProvider'

export default async function Home() {
  const userData = await getCurrentUser()
  return (
    <UserProvider user={userData}>
      <main className="min-h-screen">
        <Header />
        <Upload />
      </main>
    </UserProvider>
  )
}
