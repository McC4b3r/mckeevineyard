import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 retreat-wash" />
      <div className="absolute inset-x-0 top-0 h-80 bg-[linear-gradient(180deg,rgba(112,136,96,0.18),transparent)]" />
      <div className="absolute left-[-8rem] top-36 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(231,220,186,0.24),transparent_70%)] blur-3xl" />
      <div className="absolute right-[-6rem] top-64 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(173,190,165,0.14),transparent_68%)] blur-3xl" />
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 quiet-reveal">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
