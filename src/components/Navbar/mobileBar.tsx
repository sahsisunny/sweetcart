import React from 'react';
import { IconType } from 'react-icons';
import { FaRegUser, FaUser } from 'react-icons/fa6';
import { BsHandbagFill, BsHandbag } from 'react-icons/bs';
import { BiSolidCategory, BiCategory } from 'react-icons/bi';
import { BiSolidHome, BiHomeAlt } from 'react-icons/bi';
import Modal from '@/components/Modal';
import Link from 'next/link';

interface MobileTabProps {
    label: string;
    icon: IconType;
    isActive: boolean;
    href: string;
    onClick?: () => void;
}

const MobileTab: React.FC<MobileTabProps> = ({ label, icon: Icon, href, onClick, isActive }) => {
    return (
        <div className="w-1/4 flex justify-center items-center text-gray-500">
            <Link className="flex flex-col items-center" href={href} onClick={onClick}>
                {isActive ? <Icon className="text-2xl text-center" /> : <Icon className="text-2xl text-center" />}
                <p className="text-center text-sm">{label}</p>
            </Link>
        </div>
    );
};

interface TabConfig {
    label: string;
    icon: IconType;
    activeIcon: IconType;
    href: string;
}

interface MobileBarProps {
    activeTab: string;
}

const MobileBar: React.FC<MobileBarProps> = ({ activeTab }) => {
    console.log(`MobileBar: ${activeTab}`);

    const [showModal, setShowModal] = React.useState(false);
    const onClose = () => setShowModal(false);

    const tabs: TabConfig[] = [
        {
            label: 'Home',
            icon: BiHomeAlt,
            href: '/',
            activeIcon: BiSolidHome,
        },
        {
            label: 'Categories',
            icon: BiCategory,
            href: '/categories',
            activeIcon: BiSolidCategory,
        },
        {
            label: 'Cart',
            icon: BsHandbag,
            href: '/cart',
            activeIcon: BsHandbagFill,
        },
    ];

    return (
        <div className="w-screen h-16 flex justify-between items-center bg-white lg:hidden border-2 sticky bottom-0 left-0">
            {tabs.map((tab, index) => (
                <MobileTab
                    key={index}
                    label={tab.label}
                    isActive={activeTab == tab.href}
                    icon={activeTab === tab.href ? tab.activeIcon : tab.icon}
                    href={tab.href}
                />
            ))}
            <div className="w-1/4 flex justify-center items-center text-gray-500">
                <button className="flex flex-col items-center" onClick={() => setShowModal(true)}>
                    {showModal ? (
                        <FaUser className="text-2xl text-center" />
                    ) : (
                        <FaRegUser className="text-2xl text-center" />
                    )}
                    <p className="text-center text-sm">Account</p>
                </button>
            </div>

            {showModal && <Modal onClose={onClose} />}
        </div>
    );
};

export default MobileBar;
