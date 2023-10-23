import '../../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Ilustration from '../../../assets/ilustration.png';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finance Control',
  description: 'Login Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>     
        <div className='flex w-full h-full'>
          <div className='w-1/2 h-full'>
            {children}
          </div>
          <div className='w-1/2 h-full flex justify-center items-center p-8'>
            <Image src={Ilustration} alt="login ilustration" className="object-contain w-full h-full max-w-[656px] max-h-[960px]" />
            <div className='bg-white max-w-[656px] p-10'>
              <p>Manage your personal finances in a simple way with fincheck, and best of all, it's completely free!</p>
            </div>
          </div>
        </div>          
      </body>
    </html>
  )
}
