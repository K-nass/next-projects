import { Suspense } from "react";
import "./globals.css";
import Header from "./Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-yellow-200">
        <div className="container mx-auto px-2 py-4">
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          {children}
        </div>
      </body>
    </html>
  );
}
