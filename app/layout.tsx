import './globals.css'
import localFont from 'next/font/local'

const spotterFont = localFont({
  src: [
    {
      path: './fonts/Aeonik-Regular.woff2',
      weight: '400',
      style: 'normal',
      // variable: 'aeonikRegular'
    },
    {
      path: './fonts/Aeonik-Medium.woff2',
      weight: '600',
      style: 'medium',
    },
  ],
})

export const metadata = {
  title: 'Welcome to Spotter.la Studio!',
  description: 'Where all your creator needs are met',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spotterFont.className}>{children}</body>
    </html>
  )
}
