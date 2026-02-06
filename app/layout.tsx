import React from "react"
import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'

import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'MSR Interior - False Ceiling, PVC Panels, Flooring & Custom Furniture Experts',
  description: 'Transform your space with MSR Interior. We specialize in false ceilings, PVC wall panels, flooring solutions, and custom furniture for homes and offices.',
  keywords: 'false ceiling, PVC panels, flooring, custom furniture, home renovation, interior design',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
