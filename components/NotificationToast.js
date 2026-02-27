"use client";
import { useState, useEffect } from 'react';
import IonIcon from './IonIcon';

export default function NotificationToast() {
    const [closed, setClosed] = useState(false);

    if (closed) return null;

    return (
        <div className="notification-toast" data-toast>
            <button className="toast-close-btn" onClick={() => setClosed(true)}>
                <IonIcon name="close-outline"></IonIcon>
            </button>

            <div className="toast-banner">
                <img src="/assets/images/products/jewellery-1.jpg" alt="Rose Gold Earrings" width="80" height="70" />
            </div>

            <div className="toast-detail">
                <p className="toast-message">Someone new just bought</p>
                <p className="toast-title">Rose Gold Earrings</p>
                <p className="toast-meta">2 Minutes ago</p>
            </div>
        </div>
    );
}
