"use client";
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';
import IonIcon from './IonIcon';

export default function CartSidebar() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const router = useRouter();

  const closeSidebar = () => {
    document.getElementById('cart-sidebar')?.classList.remove('active');
  };

  return (
    <>
      <style jsx>{`
        #cart-sidebar {
          position: fixed;
          top: 0;
          right: -400px;
          width: 100%;
          max-width: 400px;
          height: 100vh;
          background: white;
          z-index: 100;
          transition: 0.3s ease-in-out;
          box-shadow: -5px 0 15px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
        }
        #cart-sidebar.active {
          right: 0;
        }
        .cart-header {
          padding: 20px;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cart-close-btn {
          font-size: 24px;
          cursor: pointer;
          background: none;
          border: none;
        }
        .cart-items {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }
        .cart-item {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          border-bottom: 1px solid #eee;
          padding-bottom: 15px;
        }
        .cart-item img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 8px;
        }
        .cart-item-info {
          flex: 1;
        }
        .cart-item-title {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 5px;
        }
        .cart-item-price {
          color: var(--salmon-pink);
          font-weight: 700;
        }
        .cart-item-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
        }
        .qty-btn {
          width: 25px;
          height: 25px;
          background: #eee;
          border-radius: 4px;
          font-weight: bold;
        }
        .remove-btn {
          color: red;
          font-size: 12px;
          margin-left: auto;
        }
        .cart-footer {
          padding: 20px;
          border-top: 1px solid #eee;
        }
        .checkout-btn {
          width: 100%;
          padding: 15px;
          background: var(--eerie-black);
          color: white;
          border-radius: 8px;
          font-weight: bold;
          text-transform: uppercase;
        }
        .checkout-btn:hover {
          background: var(--salmon-pink);
        }
      `}</style>

      <div id="cart-sidebar">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="cart-close-btn" onClick={closeSidebar}>
            <IonIcon name="close-outline"></IonIcon>
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', marginTop: '20px' }}>Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.images[0]} alt={item.name} />
                <div className="cart-item-info">
                  <h4 className="cart-item-title">{item.name}</h4>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <div className="cart-item-actions">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <strong>Total:</strong>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
            <button className="checkout-btn" onClick={() => { closeSidebar(); router.push('/checkout'); }}>Proceed to Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}
