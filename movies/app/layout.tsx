import "./globals.css";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-gray-200 p-0 m-0">
        <CartProvider>
          <main className="container mx-auto px-4">
            <Header />
            {children}
            {modal}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
