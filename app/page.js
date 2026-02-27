"use client";
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';
import ProductCard from '../components/ProductCard';
import CategorySidebar from '../components/CategorySidebar';
import NewsletterModal from '../components/NewsletterModal';
import NotificationToast from '../components/NotificationToast';
import IonIcon from '../components/IonIcon';
import { useUI } from '../context/UIContext';

import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { isSidebarOpen, closeSidebar } = useUI();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className={`overlay ${isSidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
      <NewsletterModal />
      <NotificationToast />
      <CartSidebar />
      <Header />

      <main>
        <div className="banner">
          <div className="container">
            <div className="slider-container has-scrollbar">
              <div className="slider-item">
                <img src="/assets/images/banner-1.jpg" alt="women's latest fashion sale" className="banner-img" />
                <div className="banner-content">
                  <p className="banner-subtitle">Trending item</p>
                  <h2 className="banner-title">Women's latest fashion sale</h2>
                  <p className="banner-text">starting at &dollar; <b>20</b>.00</p>
                  <a href="/products" className="banner-btn">Shop now</a>
                </div>
              </div>
              <div className="slider-item">
                <img src="/assets/images/banner-2.jpg" alt="modern sunglasses" className="banner-img" />
                <div className="banner-content">
                  <p className="banner-subtitle">Trending accessories</p>
                  <h2 className="banner-title">Modern sunglasses</h2>
                  <p className="banner-text">starting at &dollar; <b>15</b>.00</p>
                  <a href="/products" className="banner-btn">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="product-container">
          <div className="container">
            <CategorySidebar />

            <div className="product-box">
              <div className="product-main">
                <h2 className="title">New Products</h2>
                <div className="product-grid">
                  {productsData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
