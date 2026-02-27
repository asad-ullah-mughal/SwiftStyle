import Link from 'next/link';
import categoriesData from '../data/categories.json';

export default function Footer() {
    return (
        <footer>
            <div className="footer-category">
                <div className="container">
                    <h2 className="footer-category-title">Brand directory</h2>
                    <div className="footer-category-box">
                        <h3 className="category-box-title">Fashion :</h3>
                        <a href="#" className="footer-category-link">T-shirt</a>
                        <a href="#" className="footer-category-link">Shirts</a>
                        <a href="#" className="footer-category-link">shorts & jeans</a>
                        <a href="#" className="footer-category-link">jacket</a>
                        <a href="#" className="footer-category-link">dress & frock</a>
                    </div>

                    <div className="footer-category-box">
                        <h3 className="category-box-title">footwear :</h3>
                        <a href="#" className="footer-category-link">sport</a>
                        <a href="#" className="footer-category-link">formal</a>
                        <a href="#" className="footer-category-link">Boots</a>
                        <a href="#" className="footer-category-link">casual</a>
                    </div>

                    <div className="footer-category-box">
                        <h3 className="category-box-title">jewellery :</h3>
                        <a href="#" className="footer-category-link">Necklace</a>
                        <a href="#" className="footer-category-link">Earrings</a>
                        <a href="#" className="footer-category-link">Couple rings</a>
                        <a href="#" className="footer-category-link">Pendants</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <img src="/assets/images/payment.png" alt="payment method" className="payment-img" />
                    <p className="copyright">
                        Copyright &copy; <a href="#">SwiftStyle</a> all rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
