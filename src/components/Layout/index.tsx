import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavbarMobile from '../Navbar/mobileNav';
import MobileBar from '../Navbar/mobileBar';
import { useRouter } from 'next/router';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    const router = useRouter();
    const { pathname } = router;
    const pathArray = pathname.split('/');
    const category = '/' + pathArray[1];
    console.log(`Layout: ${category}`);
    return (
        <>
            <Header />
            <main className="w-screen min-h-screen flex flex-col items-center justify-center">
                <Navbar />
                <NavbarMobile />
                {children}
                <Footer />
                <MobileBar activeTab={category as string} />
            </main>
        </>
    );
}

export default Layout;
