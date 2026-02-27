"use client";
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IonIcon from '../../../components/IonIcon';

export default function CheckoutSuccessPage() {
    return (
        <>
            <Header />
            <main style={{ padding: '100px 0', background: '#f8f9fa' }}>
                <div className="container" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', background: 'white', padding: '50px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>

                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--ocean-green)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 30px', fontSize: '40px' }}>
                        <IonIcon name="checkmark-outline"></IonIcon>
                    </div>

                    <h1 style={{ color: 'var(--eerie-black)', marginBottom: '15px', fontSize: '2.5rem' }}>Order Confirmed!</h1>

                    <p style={{ color: 'var(--sonic-silver)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px' }}>
                        Thank you for shopping at SwiftStyle. Your mock order has been successfully placed. Your cart has been cleared.
                    </p>

                    <Link href="/products" style={{ display: 'inline-block', padding: '15px 40px', background: 'var(--eerie-black)', color: 'white', fontWeight: 'bold', borderRadius: '8px', textTransform: 'uppercase' }}>
                        Continue Shopping
                    </Link>

                </div>
            </main>
            <Footer />
        </>
    );
}
