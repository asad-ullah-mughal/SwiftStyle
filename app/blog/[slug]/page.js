"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CartSidebar from '../../../components/CartSidebar';
import blogData from '../../../data/blog.json';

export default function BlogPostPage() {
    const { slug } = useParams();
    const slugStr = Array.isArray(slug) ? slug[0] : slug;

    const post = blogData.find(p => p.slug === slugStr);

    if (!post) {
        return (
            <>
                <Header />
                <main style={{ padding: '100px', textAlign: 'center' }}>
                    <h1>Article Not Found</h1>
                    <Link href="/blog" style={{ color: 'var(--salmon-pink)', textDecoration: 'underline' }}>Return to Blog</Link>
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
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

                    <img
                        src={post.image}
                        alt={post.title}
                        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '15px', marginBottom: '30px' }}
                    />

                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span style={{ color: 'var(--salmon-pink)', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px' }}>{post.category}</span>
                        <h1 style={{ fontSize: '2.5rem', color: 'var(--eerie-black)', margin: '15px 0' }}>{post.title}</h1>
                        <p style={{ color: 'var(--sonic-silver)' }}>Published by <strong>{post.author}</strong> on {post.created_at}</p>
                    </div>

                    <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--onyx)' }}>
                        <p>{post.content}</p>

                        <p style={{ marginTop: '20px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <blockquote style={{ borderLeft: '4px solid var(--salmon-pink)', paddingLeft: '20px', margin: '30px 0', fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--sonic-silver)' }}>
                            "The future of ecommerce depends entirely on bridging the seamless gap between physical inventory and digital immediacy."
                        </blockquote>

                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div style={{ marginTop: '50px', borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'center' }}>
                        <Link href="/blog" style={{ color: 'var(--salmon-pink)', fontWeight: 'bold' }}>&larr; Back to all articles</Link>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
