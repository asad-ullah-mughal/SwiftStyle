"use client";
import Link from 'next/link';
import categoriesData from '../data/categories.json';

export default function CategorySection() {
    return (
        <div className="category">
            <div className="container">
                <div className="category-item-container has-scrollbar">
                    {categoriesData.map((cat) => (
                        <div className="category-item" key={cat.id}>
                            <div className="category-img-box">
                                <img src={cat.image} alt={cat.name} width="30" />
                            </div>
                            <div className="category-content-box">
                                <div className="category-content-flex">
                                    <h3 className="category-item-title">{cat.name}</h3>
                                    <p className="category-item-amount">({cat.count})</p>
                                </div>
                                <Link href={`/categories/${cat.slug}`} className="category-btn">Show all</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
