import "./App.css";
import AboutUs from "./Layout/AboutUs";
import Carousel from "./Layout/Carousel";
import ContactUs from "./Layout/ContactUs";
import Header from "./Layout/Header";
import OutVision from "./Layout/OutVision";
import Partner from "./Layout/Partner";
import ProductList from "./Layout/ProductList";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Carousel/>
      <AboutUs/>
      <OutVision/>
      <ProductList/>
      <Partner/>
      <ContactUs/>
    </div>
  );
}

export default App;
