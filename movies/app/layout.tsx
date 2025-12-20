import "./globals.css";
import Header from "./components/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="bg-gray-100">
          <main className="container mx-auto px-4">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
