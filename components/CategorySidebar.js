"use client";
import { useState } from 'react';
import categoriesData from '../data/categories.json';
import IonIcon from './IonIcon';
import { useUI } from '../context/UIContext';
import Link from 'next/link';

export default function CategorySidebar() {
    const { isSidebarOpen, closeSidebar } = useUI();
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <div className={`sidebar has-scrollbar ${isSidebarOpen ? 'active' : ''}`}>
            <div className="sidebar-category">
                <div className="sidebar-top">
                    <h2 className="sidebar-title">Category</h2>
                    <button className="sidebar-close-btn" onClick={closeSidebar}>
                        <IonIcon name="close-outline"></IonIcon>
                    </button>
                </div>

                <ul className="sidebar-menu-category-list">
                    {categoriesData.map((cat) => (
                        <li className="sidebar-menu-category" key={cat.id}>
                            <button
                                className={`sidebar-accordion-menu ${activeAccordion === cat.id ? 'active' : ''}`}
                                onClick={() => toggleAccordion(cat.id)}
                            >
                                <div className="menu-title-flex">
                                    <img src={cat.image} alt={cat.name} width="20" height="20" className="menu-title-img" />
                                    <p className="menu-title">{cat.name}</p>
                                </div>

                                <div>
                                    <IonIcon name={activeAccordion === cat.id ? "remove-outline" : "add-outline"} className="add-icon"></IonIcon>
                                </div>
                            </button>

                            <ul className={`sidebar-submenu-category-list ${activeAccordion === cat.id ? 'active' : ''}`}
                                style={{ display: activeAccordion === cat.id ? 'block' : 'none', padding: '10px 0 10px 25px' }}>
                                <li className="sidebar-submenu-category">
                                    <Link href={`/categories/${cat.slug}`} className="sidebar-submenu-title" onClick={closeSidebar}>
                                        <p className="product-name">View All {cat.name}</p>
                                        <data value={cat.count} className="stock" title="Available Stock">{cat.count}</data>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
