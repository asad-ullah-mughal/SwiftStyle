"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useCart } from '../../context/CartContext';

export default function CheckoutPage() {
    const { cart, totalPrice, clearCart } = useCart();
    const router = useRouter();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        cardNumber: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        // Simulate order creation processing
        clearCart();
        router.push('/checkout/success');
    };

    if (cart.length === 0) {
        return (
            <>
                <Header />
                <main style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h2>Your cart is empty</h2>
                    <p>Please add some items before proceeding to checkout.</p>
                    <a href="/products" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: 'var(--salmon-pink)', color: 'white', borderRadius: '5px' }}>Return to Shop</a>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <style jsx>{`
        .checkout-grid {
          display: flex;
          gap: 40px;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .form-section {
          flex: 2;
          min-width: 300px;
          background: #fff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0,0,0,0.05);
          border: 1px solid #eee;
        }
        .summary-section {
          flex: 1;
          min-width: 300px;
          background: #f8f9fa;
          padding: 30px;
          border-radius: 10px;
          border: 1px solid #eee;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--eerie-black);
        }
        .form-group input {
          width: 100%;
          padding: 12px;
          border: 1px solid var(--cultured);
          border-radius: 5px;
        }
        .checkout-btn {
          width: 100%;
          padding: 15px;
          background: var(--eerie-black);
          color: white;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 5px;
          margin-top: 20px;
          cursor: pointer;
        }
        .checkout-btn:hover {
          background: var(--salmon-pink);
        }
      `}</style>

            <Header />
            <main style={{ padding: '60px 0' }}>
                <div className="container">
                    <h1 className="title" style={{ marginBottom: '40px' }}>Secure Checkout</h1>

                    <div className="checkout-grid">
                        <div className="form-section">
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--onyx)' }}>Shipping & Payment Details</h2>

                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div className="form-group" style={{ flex: 1 }}>
                                        <label>First Name</label>
                                        <input type="text" name="firstName" required onChange={handleChange} />
                                    </div>
                                    <div className="form-group" style={{ flex: 1 }}>
                                        <label>Last Name</label>
                                        <input type="text" name="lastName" required onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Shipping Address</label>
                                    <input type="text" name="address" required onChange={handleChange} />
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div className="form-group" style={{ flex: 2 }}>
                                        <label>City</label>
                                        <input type="text" name="city" required onChange={handleChange} />
                                    </div>
                                    <div className="form-group" style={{ flex: 1 }}>
                                        <label>Postal/ZIP Code</label>
                                        <input type="text" name="zip" required onChange={handleChange} />
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '1.2rem', marginTop: '30px', marginBottom: '15px' }}>Payment Information</h3>
                                <div className="form-group">
                                    <label>Credit Card Number</label>
                                    <input type="text" name="cardNumber" placeholder="0000 0000 0000 0000" required onChange={handleChange} />
                                </div>

                                <button type="submit" className="checkout-btn">Place Order - ${totalPrice.toFixed(2)}</button>
                            </form>
                        </div>

                        <div className="summary-section">
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--onyx)' }}>Order Summary</h2>

                            <div style={{ marginBottom: '20px', maxHeight: '300px', overflowY: 'auto' }}>
                                {cart.map(item => (
                                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '15px', marginBottom: '15px', borderBottom: '1px solid #ddd' }}>
                                        <div>
                                            <span style={{ fontWeight: '500' }}>{item.name}</span>
                                            <p style={{ color: 'var(--sonic-silver)', fontSize: '0.9rem' }}>Qty: {item.quantity}</p>
                                        </div>
                                        <strong style={{ alignSelf: 'center' }}>${(item.price * item.quantity).toFixed(2)}</strong>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #ddd', paddingTop: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                <span>Total</span>
                                <span style={{ color: 'var(--salmon-pink)' }}>${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
