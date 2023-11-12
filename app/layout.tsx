import type { Metadata } from 'next'
import { MyFooter, MyHeader } from '@/components'
import './globals.css'


export const metadata: Metadata = {
  title: 'Блог',
  description: 'Новостной блог',
}

interface RootLayoutProps{
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="relative">
        <MyHeader/>
        {children}
        <MyFooter/>
      </body>
    </html>
  )
}
