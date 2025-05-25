import React from "react";

const Header = () => {
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="flex sticky top-0 bg-white z-10">
      <div className="container flex items-center justify-between m-auto">
        <img src="./logo-fit.png" className="h-20 p-2" alt="" />
        <div>
          <ul className="flex font-bold uppercase gap-10">
            <li className="p-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Home
            </li>
            <li className="p-2 cursor-pointer" onClick={() => scrollToSection("AboutUs")}>
              About Us
            </li>
            <li className="p-2 cursor-pointer" onClick={() => scrollToSection("OutVision")}>
              Our Vision
            </li>
            <li className="p-2 cursor-pointer" onClick={() => scrollToSection("ProductList")}>
              Product List
            </li>
            <li className="p-2 cursor-pointer" onClick={() => scrollToSection("Partner")}>
              Partner
            </li>
            <li className="p-2 cursor-pointer" onClick={() => scrollToSection("ContactUs")}>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
