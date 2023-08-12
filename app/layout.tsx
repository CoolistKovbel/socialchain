// MainApp Index

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import MainHeader from '@/components/mainHeader'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SocialChain',
  description: 'The place to b e',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header  */}
        <MainHeader />
          {children}
        {/* Footer ? */}
        </body>
    </html>
  )
}
