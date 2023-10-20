import { Header, ModalAuth } from '@/components'
import { getServerSession } from 'next-auth'
import '../styles/globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Custom Sports',
  description: 'Generated by create next app'
}

interface Props {
  children: React.ReactNode
}

async function RootLayout({ children }: Props) {
  const session = await getServerSession()

  return (
    <html lang='en'>
      <body>
        <Providers>
          <Header />
          {children}
          {session === null && <ModalAuth />}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
