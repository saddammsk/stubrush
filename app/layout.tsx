import { Poppins , Inter} from 'next/font/google';
import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { GlobalProvider } from './context/useGlobalContext';


export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

const Helvetica = localFont({
  src: './fonts/Helvetica.ttf',
  weight: '400',
  variable: '--font-Helvetica',
})

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  variable: "--font-poppins",
})

const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${Helvetica.variable} ${inter.variable} antialiased`}
      >
        <GlobalProvider>
        <main className='overflow-auto bg-background'>
        <Navbar />
        {children}
        <Footer/>
        </main>
        </GlobalProvider>
      </body>
    </html>
  );
}
