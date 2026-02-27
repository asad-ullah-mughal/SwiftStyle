"use client";
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import IonIcon from './IonIcon';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="showcase">
            <div className="showcase-banner">
                <img src={product.images[0]} alt={product.name} className="product-img default" width="300" />
                {product.images[1] && (
                    <img src={product.images[1]} alt={product.name} className="product-img hover" width="300" />
                )}

                {product.badge && (
                    <p className="showcase-badge angle black">{product.badge}</p>
                )}

                <div className="showcase-actions">
                    <button className="btn-action">
                        <IonIcon name="heart-outline"></IonIcon>
                    </button>
                    <Link href={`/products/${product.id}`} className="btn-action">
                        <IonIcon name="eye-outline"></IonIcon>
                    </Link>
                    <button className="btn-action" onClick={(e) => { e.preventDefault(); addToCart(product); }}>
                        <IonIcon name="bag-add-outline"></IonIcon>
                    </button>
                </div>
            </div>

            <div className="showcase-content">
                <Link href={`/categories`} className="showcase-category">{product.category}</Link>
                <Link href={`/products/${product.id}`}>
                    <h3 className="showcase-title">{product.name}</h3>
                </Link>

                <div className="showcase-rating">
                    {[...Array(5)].map((_, i) => (
                        <IonIcon key={i} name={i < product.rating ? "star" : "star-outline"}></IonIcon>
                    ))}
                </div>

                <div className="price-box">
                    <p className="price">${product.price.toFixed(2)}</p>
                    <del>${product.originalPrice.toFixed(2)}</del>
                </div>
            </div>
        </div>
    );
}
