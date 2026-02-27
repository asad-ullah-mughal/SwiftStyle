"use client";
import dynamic from 'next/dynamic';

const IonIcon = dynamic(() => import('react').then(mod => {
    return function IonIconClient({ name, ...props }) {
        // @ts-ignore
        return <ion-icon name={name} {...props}></ion-icon>;
    };
}), { ssr: false });

export default IonIcon;
