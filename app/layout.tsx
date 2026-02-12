import React from "react"
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_Thai, Inter } from 'next/font/google'

import './globals.css'

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  variable: '--font-noto-sans-thai',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'LETcare - โซลาร์เซลล์ & ระบบความปลอดภัยอัจฉริยะ',
  description:
    'ติดตั้งโซลาร์เซลล์พร้อมระบบ Smart Security ครบวงจร ลดค่าไฟ พร้อมดูแลความปลอดภัย 24 ชม.',
}

export const viewport: Viewport = {
  themeColor: '#FF6400',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <body
        className={`${notoSansThai.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
