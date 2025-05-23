import { useEffect, useState } from "react";
import "./App.css";
import AboutUs from "./Layout/AboutUs";
import Carousel from "./Layout/Carousel";
import ContactUs from "./Layout/ContactUs";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import OutVision from "./Layout/OutVision";
import Partner from "./Layout/Partner";
import ProductList from "./Layout/ProductList";
import LoginModal from "./Layout/LoginModal";
import 'react-quill/dist/quill.snow.css' // theme chính

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === "/admin") {
      setIsOpen(true);
    }
    return () => {};
  }, []);

  return (
    <div className="w-full">
      <Header />
      <Carousel isLogin={isLogin} />
      <AboutUs isLogin={isLogin} />
      <OutVision isLogin={isLogin} />
      <ProductList isLogin={isLogin} />
      <Partner isLogin={isLogin} />
      <ContactUs isLogin={isLogin} />
      <Footer isLogin={isLogin} />
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} setIsLogin={setIsLogin} />
    </div>
  );
}

export default App;
