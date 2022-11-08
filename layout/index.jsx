import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
