import './globals.css'

export const metadata = {
  title: 'Calvin Ip Website',
  description: 'Calvin Ip personal website.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-600'>{children}</body>
    </html>
  )
}
