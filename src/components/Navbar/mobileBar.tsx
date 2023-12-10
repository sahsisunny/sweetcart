import React from 'react';
import { IconType } from 'react-icons';
import { FaRegUser, FaUser } from 'react-icons/fa6';
import { BsHandbagFill, BsHandbag } from 'react-icons/bs';
import { BiSolidCategory, BiCategory } from 'react-icons/bi';
import { BiSolidHome, BiHomeAlt } from 'react-icons/bi';

interface MobileTabProps {
    label: string;
    icon: IconType;
    isActive: boolean;
    href: string;
}

const MobileTab: React.FC<MobileTabProps> = ({ label, icon: Icon, href }) => {
    return (
        <div className="w-1/4 flex justify-center items-center text-gray-500">
            <a className="flex flex-col items-center" href={href}>
                <Icon className="text-2xl text-center" />
                <p className="text-center text-sm">{label}</p>
            </a>
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
    activeTab: 'home' | 'categories' | 'cart' | 'account';
}

const MobileBar: React.FC<MobileBarProps> = ({ activeTab }) => {
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
        {
            label: 'Account',
            icon: FaRegUser,
            href: '/account',
            activeIcon: FaUser,
        },
    ];

    return (
        <div className="w-screen h-16 flex justify-between items-center bg-white lg:hidden border-2 sticky bottom-0 left-0">
            {tabs.map((tab, index) => (
                <MobileTab
                    key={index}
                    label={tab.label}
                    icon={activeTab === tab.label ? tab.activeIcon : tab.icon}
                    isActive={activeTab === tab.label.toLowerCase()}
                    href={tab.href}
                />
            ))}
        </div>
    );
};

export default MobileBar;
