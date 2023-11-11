import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js STEP Boilerplate Template',
  description:
    'The personal Next.js StandardJS + Tailwind CSS + ESLint + Prettier Boilerplate Template',
  metadataBase: new URL('https://nextjs-step-boilerplate.vercel.app'),
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
