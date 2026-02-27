import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { UIProvider } from "../context/UIContext";

export const metadata = {
  title: "SwiftStyle - eCommerce Website",
  description: "Enterprise eCommerce Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/assets/images/logo/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/assets/css/style-prefix.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" defer></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" defer></script>
      </head>
      <body suppressHydrationWarning>
        <CartProvider>
          <UIProvider>
            {children}
          </UIProvider>
        </CartProvider>

      </body>
    </html>
  );
}
