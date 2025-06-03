import './globals.css';
import '@fortawesome/fontawesome-free';
import { Montserrat } from 'next/font/google';
// import NavbarW from './_components/navbarw/page';
import ReactQueryProvider from './_components/reactQueryProvider/page';
import Footer from './_components/footer/page';
import Navbar from './_components/navbar/page';
import NavbarW from './_components/navbarw/page';
import ShowCartProvider from './context/showcart';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head></head>
      <body>
        <main className="max-w-[2000px] mx-auto relative">
          <div className="nav">
            <Navbar />
          </div>
          <div className="relative">
            <ShowCartProvider>
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </ShowCartProvider>
          </div>
          <footer>
            <Footer />
          </footer>
        </main>
      </body>
    </html>
  );
}
