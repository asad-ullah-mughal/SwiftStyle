"use client";
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CartSidebar from '../../../components/CartSidebar';
import productsData from '../../../data/products.json';
import { useCart } from '../../../context/CartContext';
import { useState } from 'react';
import IonIcon from '../../../components/IonIcon';

export default function ProductDetails() {
    const { id } = useParams();
    const product = productsData.find(p => p.id === parseInt(id));
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <>
                <Header />
                <main style={{ padding: '100px', textAlign: 'center' }}>
                    <h1>Product Not Found</h1>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <CartSidebar />
            <Header />

            <main style={{ padding: '60px 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>

                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                style={{ width: '100%', borderRadius: '15px', border: '1px solid #eee' }}
                            />
                            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                {product.images.map((img, idx) => (
                                    <img key={idx} src={img} alt="" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', cursor: 'pointer', border: '1px solid #eee' }} />
                                ))}
                            </div>
                        </div>

                        <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <span className="showcase-category">{product.category}</span>
                                <h1 style={{ fontSize: '2rem', margin: '10px 0', color: 'var(--eerie-black)' }}>{product.name}</h1>

                                <div className="showcase-rating" style={{ marginBottom: '15px' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <IonIcon key={i} name={i < product.rating ? "star" : "star-outline"}></IonIcon>
                                    ))}
                                </div>

                                <div className="price-box" style={{ fontSize: '1.5rem', justifyContent: 'flex-start', gap: '15px' }}>
                                    <p className="price">${product.price.toFixed(2)}</p>
                                    <del>${product.originalPrice.toFixed(2)}</del>
                                </div>
                            </div>

                            <p style={{ color: 'var(--sonic-silver)', lineHeight: '1.8' }}>
                                {product.description}
                            </p>

                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginTop: '20px' }}>
                                <div style={{ display: 'flex', border: '1px solid var(--cultured)', borderRadius: '5px', overflow: 'hidden' }}>
                                    <button
                                        style={{ padding: '10px 15px', background: '#f5f5f5', border: 'none', cursor: 'pointer' }}
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >-</button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        readOnly
                                        style={{ width: '50px', textAlign: 'center', border: 'none', outline: 'none' }}
                                    />
                                    <button
                                        style={{ padding: '10px 15px', background: '#f5f5f5', border: 'none', cursor: 'pointer' }}
                                        onClick={() => setQuantity(quantity + 1)}
                                    >+</button>
                                </div>

                                <button
                                    onClick={() => addToCart(product, quantity)}
                                    style={{
                                        background: 'var(--salmon-pink)',
                                        color: 'white',
                                        padding: '12px 30px',
                                        borderRadius: '5px',
                                        fontWeight: 'bold',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: '0.3s'
                                    }}
                                    onMouseOver={(e) => e.target.style.background = 'var(--eerie-black)'}
                                    onMouseOut={(e) => e.target.style.background = 'var(--salmon-pink)'}
                                >
                                    Add to Cart
                                </button>
                            </div>

                            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #eee', fontSize: '14px', color: 'var(--sonic-silver)' }}>
                                <p><strong>Availability:</strong> {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
                                <p style={{ marginTop: '10px' }}><strong>Category:</strong> {product.category}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
