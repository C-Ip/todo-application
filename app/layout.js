import './globals.css';
import Header from './components/NavigationBar';
import DarkMode from './components/DarkMode';

export const metadata = {
  title: 'Calvin Ip Website',
  description: 'Calvin Ip personal website.',
}

/** All components used in the layout.js file will persist on all pages. */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-600'>
        <Header />
        <DarkMode />
        <main>{children}</main>
      </body>
    </html>
  )
}
