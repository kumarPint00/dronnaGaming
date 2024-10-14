'use client'
import MainLayout from '@/components/MainLayout';
import Navbar from '@/components/Navbar/Navbar';
import NavbarWrapper from '@/components/Navbar/NavbarWrapper';
import Sidebar from '@/components/Sidebar/Sidebar';
import { UserProvider } from '@/context/Context';
// import './globals.css'; // Global styles
import { ReactNode, useState } from 'react';


interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <html lang="en">
     <body>
      <UserProvider>
      <main
          style={{
            flexGrow: 1,
            padding: '20px',
            marginLeft: isOpen ? '240px' : '60px',
            transition: 'margin-left 0.3s',
            width: '100%',
            height: '100vh',
            overflowY: 'auto',
          }}
        >
          {children}
        </main>     </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
