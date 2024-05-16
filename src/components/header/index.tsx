import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Loader } from 'lucide-react'

export const Header = async () => {
  return (
    <header className="flex items-center justify-between h-16 bg-background px-4 md:px-6 border-b">
      <div className="logo flex justify-center items-center">
        👁 Where are you
      </div>
      <div className="flex items-center">
        <ClerkLoading>
          <Loader className="animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <Button>Sign in</Button>
            </Link>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  )
}
