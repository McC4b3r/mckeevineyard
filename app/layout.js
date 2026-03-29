import "./globals.css";

export const metadata = {
  title: "McKee Vineyard",
  description: "McKee Vineyard and Lucky Well Vineyard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900 antialiased">{children}</body>
    </html>
  );
}
