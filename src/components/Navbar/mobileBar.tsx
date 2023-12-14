import React from 'react';
import { IconType } from 'react-icons';
import { FaRegUser, FaUser } from 'react-icons/fa6';
import { BsHandbagFill, BsHandbag } from 'react-icons/bs';
import { BiSolidCategory, BiCategory } from 'react-icons/bi';
import { BiSolidHome, BiHomeAlt } from 'react-icons/bi';
import { motion } from 'framer-motion';
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
        <motion.div className="w-1/4 flex justify-center items-center text-gray-500" whileHover={{ scale: 1.1 }}>
            <Link className="flex flex-col items-center" href={href} onClick={onClick}>
                {isActive ? <Icon className="text-2xl text-center" /> : <Icon className="text-2xl text-center" />}
                <p className="text-center text-sm">{label}</p>
            </Link>
        </motion.div>
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

const MobileBar: React.FC<MobileBarProps> = ({ activeTab }) => {
    const [showModal, setShowModal] = React.useState(false);
    const onClose = () => setShowModal(false);

    return (
        <motion.div
            className="w-screen h-16 flex justify-between items-center bg-white lg:hidden border-2 sticky bottom-0 left-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
        >
            {tabs.map((tab, index) => (
                <MobileTab
                    key={index}
                    label={tab.label}
                    isActive={activeTab == tab.href}
                    icon={activeTab === tab.href ? tab.activeIcon : tab.icon}
                    href={tab.href}
                />
            ))}
            <motion.div className="w-1/4 flex justify-center items-center text-gray-500" whileHover={{ scale: 1.1 }}>
                <button className="flex flex-col items-center" onClick={() => setShowModal(true)}>
                    {showModal ? (
                        <FaUser className="text-2xl text-center" />
                    ) : (
                        <FaRegUser className="text-2xl text-center" />
                    )}
                    <p className="text-center text-sm">Account</p>
                </button>
            </motion.div>

            {showModal && <Modal onClose={onClose} />}
        </motion.div>
    );
};

export default MobileBar;
