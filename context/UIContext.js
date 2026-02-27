"use client";
import { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export function UIProvider({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true); // Default show for newsletter etc

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);
    const closeModal = () => setIsModalOpen(false);

    return (
        <UIContext.Provider value={{
            isSidebarOpen,
            toggleSidebar,
            closeSidebar,
            isModalOpen,
            closeModal
        }}>
            {children}
        </UIContext.Provider>
    );
}

export function useUI() {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error('useUI must be used within a UIProvider');
    }
    return context;
}
