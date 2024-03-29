import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Provider } from "@/context/DarkContext"
import "@/style/globals.css"


export const metadata = {
  title: 'blogs',
  description: 'articles',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <Provider >
      <Navbar/>
         <main className="main">  {children}  </main>
      <Footer/>
      </Provider></body>
    </html>
  )
}


