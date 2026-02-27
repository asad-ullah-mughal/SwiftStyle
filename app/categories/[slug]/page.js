"use client";
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CartSidebar from '../../../components/CartSidebar';
import ProductCard from '../../../components/ProductCard';
import productsData from '../../../data/products.json';
import categoriesData from '../../../data/categories.json';
import CategorySidebar from '../../../components/CategorySidebar';
import { useUI } from '../../../context/UIContext';

export default function CategoryDetails() {
    const { slug } = useParams();
    const { isSidebarOpen, closeSidebar } = useUI();
    const categoryStr = Array.isArray(slug) ? slug[0] : slug;

    // Retrieve matching category to show name, or fallback
    const categoryInfo = categoriesData.find(c => c.slug.toLowerCase() === categoryStr.toLowerCase());
    const categoryName = categoryInfo ? categoryInfo.name : categoryStr.charAt(0).toUpperCase() + categoryStr.slice(1);

    // Filter products where category text matches (case-insensitive) OR where the category slug would match
    const filteredProducts = productsData.filter(p =>
        p.category.toLowerCase() === categoryName.toLowerCase() ||
        p.category.toLowerCase() === categoryStr.toLowerCase()
    );

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
                                <h1 className="title">{categoryName} Products</h1>

                                {filteredProducts.length === 0 ? (
                                    <div style={{ padding: '40px', textAlign: 'center', background: '#f8f9fa', borderRadius: '10px' }}>
                                        <h2>No products found for {categoryName}</h2>
                                        <p style={{ marginTop: '10px', color: 'var(--sonic-silver)' }}>Try browsing another category instead.</p>
                                        <a href="/categories" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: 'var(--salmon-pink)', color: 'white', borderRadius: '5px' }}>Back to Categories</a>
                                    </div>
                                ) : (
                                    <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
                                        {filteredProducts.map((product) => (
                                            <ProductCard key={product.id} product={product} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
