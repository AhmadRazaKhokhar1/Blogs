import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/Component/Navbar.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <head>
        <link  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
        <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" type='module'></script>
      </head> 

        <Navbar/>
        {children}
        
        </body>


    </html>

  )
}
