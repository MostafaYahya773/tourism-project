import './globals.css';
import '@fortawesome/fontawesome-free';
import { Montserrat } from 'next/font/google';

import ReactQueryProvider from './_components/reactQueryProvider/page';
import Footer from './_components/footer/page';

import ShowCartProvider from './context/contextProvider';
import ToUp from './_components/toUp/page';
import Navigation from './_components/navigation/page';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head></head>
      <body>
        <ShowCartProvider>
          <ReactQueryProvider>
            <main className="max-w-[2000px] mx-auto relative">
              <div className="nav">
                <Navigation />
              </div>
              <div className="relative">
                {children}
                <Toaster />
              </div>
              <div className="toTopButton">
                <ToUp />
              </div>
              <footer>
                <Footer />
              </footer>
            </main>
            <ReactQueryDevtools initialIsOpen={false} />
          </ReactQueryProvider>
        </ShowCartProvider>
      </body>
    </html>
  );
}
