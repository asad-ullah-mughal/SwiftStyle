"use client";
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartSidebar from '../../components/CartSidebar';
import categoriesData from '../../data/categories.json';

export default function CategoriesPage() {
    return (
        <>
            <CartSidebar />
            <Header />
            <main style={{ padding: '60px 0' }}>
                <div className="container">
                    <h1 className="title">Shop By Categories</h1>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '30px'
                    }}>
                        {categoriesData.map((cat) => (
                            <Link href={`/categories/${cat.slug}`} key={cat.id} style={{
                                border: '1px solid var(--cultured)',
                                borderRadius: '10px',
                                padding: '30px 20px',
                                textAlign: 'center',
                                transition: '0.3s',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '15px'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--salmon-pink)'}
                                onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--cultured)'}>
                                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '50%' }}>
                                    <img src={cat.image} alt={cat.name} width="40" height="40" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', color: 'var(--eerie-black)', marginBottom: '5px' }}>{cat.name}</h3>
                                    <p style={{ color: 'var(--sonic-silver)', fontSize: '0.9rem' }}>{cat.count} Items</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
