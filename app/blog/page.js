"use client";
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartSidebar from '../../components/CartSidebar';
import blogData from '../../data/blog.json';

export default function BlogPage() {
    return (
        <>
            <CartSidebar />
            <Header />
            <main style={{ padding: '60px 0' }}>
                <div className="container">
                    <h1 className="title">SwiftStyle Fashion Blog</h1>

                    <div className="blog-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
                        {blogData.map((post) => (
                            <div className="blog-card" key={post.id} style={{ display: 'flex', flexDirection: 'column' }}>
                                <Link href={`/blog/${post.slug}`}>
                                    <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: '10px', objectFit: 'cover', height: '220px' }} className="blog-banner" />
                                </Link>

                                <div className="blog-content" style={{ padding: '20px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <span className="blog-category" style={{ color: 'var(--salmon-pink)', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>{post.category}</span>

                                    <Link href={`/blog/${post.slug}`}>
                                        <h3 className="blog-title" style={{ marginTop: '10px', marginBottom: '15px', color: 'var(--eerie-black)', fontSize: '18px', lineHeight: '1.4' }}>{post.title}</h3>
                                    </Link>

                                    <p className="blog-meta" style={{ marginTop: 'auto', color: 'var(--sonic-silver)', fontSize: '14px' }}>
                                        By <cite style={{ fontStyle: 'normal', fontWeight: 'bold' }}>{post.author}</cite> / <time>{post.created_at}</time>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
