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
import axios from "axios";
export const SERVER = {
  API: null,
  URL: "",
};
export const getLinkImage = (data) => {
  return SERVER.URL + "/" + data;
};
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const SERVER_URL = localStorage.getItem("SERVER");
    if (SERVER_URL) {
      console.log(SERVER_URL);
      SERVER.URL = SERVER_URL;
      SERVER.API = axios.create({
        baseURL: SERVER_URL,
      });
    } else {
      window.location.reload();
    }
    setloading(false);
    const { pathname } = window.location;
    if (pathname === "/admin") {
      setIsOpen(true);
    }
    return () => {};
  }, []);

  if (loading) return null;
  return (
    <div className="w-full">
      <Header />
      <Carousel isLogin={isLogin} id="Carousel" />
      <AboutUs isLogin={isLogin} id="AboutUs" />
      <OutVision isLogin={isLogin} id="OutVision" />
      <ProductList isLogin={isLogin} id="ProductList" />
      <Partner isLogin={isLogin} id="Partner" />
      <ContactUs isLogin={isLogin} id="ContactUs" />
      <Footer isLogin={isLogin} id="Footer" />
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} setIsLogin={setIsLogin} />
    </div>
  );
}

export default App;
