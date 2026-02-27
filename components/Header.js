"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import IonIcon from './IonIcon';
import { useUI } from '../context/UIContext';
import categoriesData from '../data/categories.json';

export default function Header() {
    const { totalItems } = useCart();
    const { isSidebarOpen, toggleSidebar, closeSidebar } = useUI();
    const [activeMobileAccordion, setActiveMobileAccordion] = useState(null);

    const toggleMobileAccordion = (id) => {
        setActiveMobileAccordion(activeMobileAccordion === id ? null : id);
    };

    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <ul className="header-social-container">
                        <li><a href="#" className="social-link"><IonIcon name="logo-facebook"></IonIcon></a></li>
                        <li><a href="#" className="social-link"><IonIcon name="logo-twitter"></IonIcon></a></li>
                        <li><a href="#" className="social-link"><IonIcon name="logo-instagram"></IonIcon></a></li>
                        <li><a href="#" className="social-link"><IonIcon name="logo-linkedin"></IonIcon></a></li>
                    </ul>

                    <div className="header-alert-news">
                        <p><b>Free Shipping</b> This Week Order Over - $55</p>
                    </div>

                    <div className="header-top-actions">
                        <select name="currency">
                            <option value="usd">USD &dollar;</option>
                            <option value="eur">EUR &euro;</option>
                        </select>

                        <select name="language">
                            <option value="en-US">English</option>
                            <option value="es-ES">Espa&ntilde;ol</option>
                            <option value="fr">Fran&ccedil;ais</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="header-main">
                <div className="container">
                    <Link href="/" className="header-logo">
                        {/* <img src="/assets/images/logo/logo.svg" alt="SwiftStyle's logo" width="120" height="36" /> */}
                        <h1>SwiftStyle</h1>
                    </Link>

                    <div className="header-search-container">
                        <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
                        <button className="search-btn">
                            <IonIcon name="search-outline"></IonIcon>
                        </button>
                    </div>

                    <div className="header-user-actions">
                        <button className="action-btn">
                            <IonIcon name="person-outline"></IonIcon>
                        </button>
                        <button className="action-btn">
                            <IonIcon name="heart-outline"></IonIcon>
                            <span className="count">0</span>
                        </button>
                        <button className="action-btn" onClick={() => document.getElementById('cart-sidebar')?.classList.toggle('active')}>
                            <IonIcon name="bag-handle-outline"></IonIcon>
                            <span className="count">{totalItems}</span>
                        </button>
                    </div>
                </div>
            </div>

            <nav className="desktop-navigation-menu">
                <div className="container">
                    <ul className="desktop-menu-category-list">
                        <li className="menu-category"><Link href="/" className="menu-title">Home</Link></li>
                        <li className="menu-category">
                            <Link href="/categories" className="menu-title">Categories</Link>

                            <div className="dropdown-panel">
                                {categoriesData.slice(0, 8).map((cat) => (
                                    <ul className="dropdown-panel-list" key={cat.id}>
                                        <li className="menu-title">
                                            <Link href={`/categories/${cat.slug}`}>{cat.name}</Link>
                                        </li>
                                        <li className="panel-list-item">
                                            <Link href={`/categories/${cat.slug}`} onClick={closeSidebar}>All {cat.name} Products</Link>
                                        </li>
                                        <li className="panel-list-item">
                                            <Link href={`/categories/${cat.slug}`} onClick={closeSidebar}>New Arrivals</Link>
                                        </li>
                                        <li className="panel-list-item">
                                            <Link href={`/categories/${cat.slug}`} onClick={closeSidebar}>Best Sellers</Link>
                                        </li>
                                        <li className="panel-list-item">
                                            <Link href={`/categories/${cat.slug}`} onClick={closeSidebar}>Trending Now</Link>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </li>
                        <li className="menu-category"><Link href="/products" className="menu-title">All Products</Link></li>
                        <li className="menu-category"><Link href="/blog" className="menu-title">Blog</Link></li>
                        <li className="menu-category"><a href="#" className="menu-title">Hot Offers</a></li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            <nav className={`mobile-navigation-menu has-scrollbar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="menu-top">
                    <h2 className="menu-title">Menu</h2>
                    <button className="menu-close-btn" onClick={closeSidebar}>
                        <IonIcon name="close-outline"></IonIcon>
                    </button>
                </div>

                <ul className="mobile-menu-category-list">
                    <li className="menu-category">
                        <Link href="/" className="menu-title" onClick={closeSidebar}>Home</Link>
                    </li>

                    <li className="menu-category">
                        <button className={`accordion-menu ${activeMobileAccordion === 'categories' ? 'active' : ''}`}
                            onClick={() => toggleMobileAccordion('categories')}>
                            <p className="menu-title">Categories</p>
                            <div>
                                <IonIcon name="add-outline" className="add-icon"></IonIcon>
                                <IonIcon name="remove-outline" className="remove-icon"></IonIcon>
                            </div>
                        </button>

                        <ul className={`submenu-category-list ${activeMobileAccordion === 'categories' ? 'active' : ''}`}>
                            {categoriesData.map((cat) => (
                                <li className="submenu-category" key={cat.id}>
                                    <Link href={`/categories/${cat.slug}`} className="submenu-title" onClick={closeSidebar}>
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className="menu-category">
                        <Link href="/products" className="menu-title" onClick={closeSidebar}>All Products</Link>
                    </li>

                    <li className="menu-category">
                        <Link href="/blog" className="menu-title" onClick={closeSidebar}>Blog</Link>
                    </li>
                </ul>

                <div className="menu-bottom">
                    <ul className="menu-social-container">
                        <li><a href="#" className="social-link"><IonIcon name="logo-facebook"></IonIcon></a></li>
                        <li><a href="#" className="social-link"><IonIcon name="logo-twitter"></IonIcon></a></li>
                        <li><a href="#" className="social-link"><IonIcon name="logo-instagram"></IonIcon></a></li>
                        <li><a href="#" className="social-link"><IonIcon name="logo-linkedin"></IonIcon></a></li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <div className="mobile-bottom-navigation">
                <button className="action-btn" onClick={toggleSidebar}>
                    <IonIcon name="menu-outline"></IonIcon>
                </button>
                <button className="action-btn" onClick={() => document.getElementById('cart-sidebar')?.classList.toggle('active')}>
                    <IonIcon name="bag-handle-outline"></IonIcon>
                    <span className="count">{totalItems}</span>
                </button>
                <Link href="/" className="action-btn">
                    <IonIcon name="home-outline"></IonIcon>
                </Link>
                <button className="action-btn">
                    <IonIcon name="heart-outline"></IonIcon>
                    <span className="count">0</span>
                </button>
                <button className="action-btn" onClick={toggleSidebar}>
                    <IonIcon name="grid-outline"></IonIcon>
                </button>
            </div>
        </header>
    );
}
