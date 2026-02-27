"use client";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import CartSidebar from '../../components/CartSidebar';
import productsData from '../../data/products.json';
import CategorySidebar from '../../components/CategorySidebar';
import { useUI } from '../../context/UIContext';

export default function ProductsPage() {
    const { isSidebarOpen, closeSidebar } = useUI();
    return (
        <>
            <div className={`overlay ${isSidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
            <CartSidebar />
            <Header />
            <main>
                <div className="product-container">
                    <div className="container">
                        <CategorySidebar />
                        <div className="product-box">
                            <div className="product-main">
                                <h1 className="title">All Products Catalog</h1>
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
