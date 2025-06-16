import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Zuhdy Nadhif Ayyasy' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Personal portfolio of Zuhdy Nadhif Ayyasy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-[#f0f0f3] p-4 shadow-sm">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            ZuhdyNA
          </Link>
          
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-black">
              Home
            </Link>
            <Link href="/gallery" className="text-gray-600 hover:text-black">
              Gallery
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-black">
              Contact
            </Link>
          </div>
        </nav>
      </header>
      
      <main>{children}</main>
      
      <footer className="bg-[#f0f0f3] p-6 text-center text-gray-600">
        <div className="max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} Zuhdy Nadhif Ayyasy. All rights reserved.</p>
          <p className="text-sm mt-2">Free Palestine 𓂆🍉</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;