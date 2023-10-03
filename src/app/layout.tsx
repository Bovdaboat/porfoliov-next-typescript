import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/app/Navbar/page";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bov Porflio',
  description: 'portfio page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      {children}
      </body>
    </html>
  )
}
