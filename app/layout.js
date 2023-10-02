import './globals.css';
import Header from './components/NavigationBar';
import DarkMode from './components/DarkMode';
import Footer from './components/Footer';

export const metadata = {
  title: 'Calvin Ip Website',
  description: 'Calvin Ip personal website.',
}

/** All components used in the layout.js file will persist on all pages. */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <DarkMode />
        {/* <Footer /> */}
        <main>{children}</main>
      </body>
    </html>
  )
}
